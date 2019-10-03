import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/service/claim.service';
import { Employee } from 'src/app/model/employee';
import { Expense } from 'src/app/model/expense';
import { Project } from 'src/app/model/project';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ExpenseClaimed } from 'src/app/model/expense-claimed';


@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {

  form: FormGroup;
  flag: boolean;
  isUpdated: boolean = false;
  expenseForm: FormGroup;
  employee: Employee = {empId:0, empName: '', empPAN: '', empDesg: '', empDomain: '', empDOJ: null, empDOB: null, empSal: 0, empMail: '', empPassword: ''};
  project: Project = {id: 0, name: '', description: '', startDate: null, endDate: null, businessUnit: ''};
  expense: Expense = {expenseCode: 0, expenseType: '', expenseDescription: ''};
  claim: ExpenseClaimed = {expenseCodeId: 0, employeeId: 0, projectCode: 0, expenseCode: 0, startDate: null, endDate: null, expenseAmount: 0};
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit() {
    this.employee = this.service.employee;
    this.project = this.service.project;
    this.expense = this.service.expense;
    this.claim.employeeId = this.employee.empId;
    this.claim.projectCode = this.project.id;
    this.claim.expenseCode = this.expense.expenseCode;
  }
  Add() {
    this.service.AddClaim(this.claim).subscribe(
      success => alert('Added Successful'),
      error => alert(error)
    );
    this.router.navigate(['']);
  }

  compareEnd(){
    if(this.claim.startDate>this.claim.endDate){
      alert('Dates not in proper order');
      this.claim.endDate = null;
    }
  }

  compareStart(){
    if(this.claim.startDate>this.claim.endDate){
      alert('Dates not in proper order');
      this.claim.startDate = null;
    }
  }

}

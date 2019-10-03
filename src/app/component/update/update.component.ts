import { Component, OnInit } from '@angular/core';
import { ExpenseClaimed } from 'src/app/model/expense-claimed';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { ClaimService } from 'src/app/service/claim.service';
import { Project } from 'src/app/model/project';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/model/expense';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  flag1: boolean = false;
  flag: boolean = false;
  isUpdated: boolean = false;
  expenseForm: FormGroup;
  claim: ExpenseClaimed = {
    expenseCodeId: 0, employeeId: 0, projectCode: 0, expenseCode: 0, startDate: null, endDate: null, expenseAmount: 0
  }
  public pro$ = new Observable<Project[]>();
  project: Project = {id: 0, name: '', description: '', startDate: null, endDate: null, businessUnit: ''};
  projects: Project[];
  expense: Expense = {expenseCode: 0, expenseType: '', expenseDescription: ''};
  expenses: Expense[];
  public exp$ = new Observable<Expense[]>();
  
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit() {
    //this.claim = this.service.getSearchData();
    this.pro$ = this.service.getProject();
    this.pro$.subscribe((data: Project[]) => {
      this.projects = data;
      if(!this.project){
        this.flag1=false;
      }
      else{
        this.flag1=true;
      }
    }, error => { alert('No Data by this Id') });

    this.exp$ = this.service.getExpense();
    this.exp$.subscribe((data: Expense[]) => {
      this.expenses = data;
      if(!this.expense){
        this.flag1=false;
      }
      else{
        this.flag1=true;
      }
    }, error => { alert('No Data by this Id') })
  }

  filterData(value: string) {
    this.flag = false;
    this.service.search(value).subscribe((data) => {
      this.claim = data;

      if (this.claim) {
        //this.service.setSearchedData(this.claim);
        this.flag = true;
      }
      else {
        this.flag = false;
      }
    }, error => { alert("Expense Id Not Found") }
    );
    //alert(this.claim.expenseAmount);

  }

  update() {
    //this.claim = this.expenseForm.value;
    this.service.updateClaim(this.claim).subscribe(
      success => alert('Update Successful'),
      error => alert(error)
    );
    this.router.navigate(['']);
  }

  error: any = { isError: false, errorMessage: '' };


  compareEnd() {
    if (this.claim.startDate > this.claim.endDate) {
      alert('Dates not in proper order');
      this.claim.endDate = null;
    }
  }

  compareStart() {
    if (this.claim.startDate > this.claim.endDate) {
      alert('Dates not in proper order');
      this.claim.startDate = null;
    }
  }
}

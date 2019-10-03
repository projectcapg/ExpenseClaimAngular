import { Component, OnInit } from '@angular/core';
import { ExpenseClaimed } from 'src/app/model/expense-claimed';
import { ClaimService } from 'src/app/service/claim.service';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  employee: Employee = {empId:0, empName: '', empPAN: '', empDesg: '', empDomain: '', empDOJ: null, empDOB: null, empSal: 0, empMail: '', empPassword: ''};
  emp: number;
  emp1: number;
  flag: boolean=false;
  public emp$ = new Observable<Employee>();
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit() {
  }
  searchEmployee()  {
    this.employee = {empId:0, empName: '', empPAN: '', empDesg: '', empDomain: '', empDOJ: null, empDOB: null, empSal: 0, empMail: '', empPassword: ''};
    this.flag = false;
    this.emp$ = this.service.getEmployee(this.emp);
    this.emp$.subscribe((data: Employee) => {
      this.employee = data;
      if(this.employee){
        this.flag=true;
      }
      else{
        this.flag=false;
      }
    }, error => { alert('No Data by this Id') });
  }
  searchProject() {
    this.service.employee = this.employee;
    this.router.navigate(['project']);
  }
}

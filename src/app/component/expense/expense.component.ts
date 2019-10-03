import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { Observable } from 'rxjs';
import { ClaimService } from 'src/app/service/claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expense: Expense = {expenseCode: 0, expenseType: '', expenseDescription: ''};
  expenses: Expense[];
  flag: boolean=false;
  expenseNum = 0;
  public exp$ = new Observable<Expense[]>();
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit() {
    this.flag = false;
    this.exp$ = this.service.getExpense();
    this.exp$.subscribe((data: Expense[]) => {
      this.expenses = data;
      if(!this.expense){
        this.flag=false;
      }
      else{
        this.flag=true;
      }
    }, error => { alert('No Data by this Id') });
  }

  AddClaim() {
    this.service.expense = this.expense;
    this.router.navigate(['Claim']);
  }

}

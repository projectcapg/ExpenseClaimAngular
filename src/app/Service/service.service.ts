import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseClaimed } from '../model/expense-claimed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  searchUrl: string = 'http://localhost:1111/expenseclaim/search/';
  updateUrl: string = 'http://localhost:1111/expenseclaim/update/';
  claim: ExpenseClaimed = {
    expenseCodeId: 0, employeeId: 0, projectCode: 0, expenseCode: 0, startDate: null, endDate: null, expenseAmount: 0
  }
  constructor(private http: HttpClient) { }

  search(value: string) {
    return this.http.get<ExpenseClaimed>(this.searchUrl + value);
  }


  updateClaim(claim: ExpenseClaimed): Observable<Object> {
    return this.http.put(this.updateUrl, claim);
  }
}

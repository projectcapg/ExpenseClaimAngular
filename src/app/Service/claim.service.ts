import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, share } from 'rxjs/operators';

import { Employee } from '../model/employee';
import { Project } from '../model/project';
import { Expense } from '../model/expense';
import { ExpenseClaimed } from '../model/expense-claimed';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  searchUrl: string = 'http://localhost:8085/claimExpense/view/';
  updateUrl: string = 'http://localhost:8085/claimExpense/update/';
  url1 = "http://localhost:8085/claimExpense/employee/";
  url2 = "http://localhost:8085/claimExpense/AllProjects/";
  url3 = "http://localhost:8085/claimExpense/AllExpenses/";
  url4 = "http://localhost:8085/claimExpense/AddClaim";
  ed: ExpenseClaimed;
  viewUrl: 'http://localhost:8085/claimExpense/view/';
  customer: string;
  deleteUrl = 'http://localhost:8085/claimExpense/deleteExpense';
  employees: Employee[];
  claims: ExpenseClaimed[];
  public employee$ = new Observable<Employee>();
  public project$ = new Observable<Project[]>();
  public expense$ = new Observable<Expense[]>();
  employee: Employee = { empId: 0, empName: '', empPAN: '', empDesg: '', empDomain: '', empDOJ: null, empDOB: null, empSal: 0, empMail: '', empPassword: '' };
  project: Project = { id: 0, name: '', description: '', startDate: null, endDate: null, businessUnit: '' };
  expense: Expense = { expenseCode: 0, expenseType: '', expenseDescription: '' };
  id: number;
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

  getData() {
    this.employee$ = this.http.get<Employee>(this.url1 + this.id).pipe(share(), retry(2), catchError(this.handleError));
  }
  handleError(error) {
    console.log(error);
    return throwError(error);
  }

  getEmployee(id: number) {
    this.id = id;
    this.getData();
    return this.employee$;
  }

  getData1() {
    this.project$ = this.http.get<Project[]>(this.url2).pipe(share(), retry(2), catchError(this.handleError));
  }

  getProject() {
    this.getData1();
    return this.project$;
  }

  getData2() {
    this.expense$ = this.http.get<Expense[]>(this.url3).pipe(share(), retry(2), catchError(this.handleError));
  }

  getExpense() {
    this.getData2();
    return this.expense$;
  }
  AddClaim(claim: ExpenseClaimed): Observable<Object> {
    return this.http.post(this.url4, claim);
  }

  getExpenseById(id: String): Observable<ExpenseClaimed> {
    //const url = `${this.url}/?id=${id}`
    return this.http.get<ExpenseClaimed>(this.searchUrl + id);
  }

  deleteExpence(id: number): Observable<ExpenseClaimed> {
    return this.http.delete<ExpenseClaimed>(`${this.deleteUrl}/${id}`, httpOptions);
  }

  getClaims(): Observable<ExpenseClaimed[]>{
    return this.http.get<ExpenseClaimed[]>(this.searchUrl);
  }

 



}

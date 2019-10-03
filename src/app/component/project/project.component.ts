import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Observable } from 'rxjs';
import { ClaimService } from 'src/app/service/claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project = {id: 0, name: '', description: '', startDate: null, endDate: null, businessUnit: ''};
  projects: Project[];
  flag: boolean=false;
  projectNum = 0;
  public pro$ = new Observable<Project[]>();
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit() {
    this.flag = false;
    this.pro$ = this.service.getProject();
    this.pro$.subscribe((data: Project[]) => {
      this.projects = data;
      if(!this.project){
        this.flag=false;
      }
      else{
        this.flag=true;
      }
    }, error => { alert('No Data by this Id') });
  }

  searchExpense() {
    this.service.project = this.project;
    this.router.navigate(['Expense']);
  }
}

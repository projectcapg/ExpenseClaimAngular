import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/service/claim.service';
import { ExpenseClaimed } from 'src/app/model/expense-claimed';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  p:number=1;

  claims: ExpenseClaimed[];

  constructor(private service: ClaimService) { }

  ngOnInit() {
    this.service.getClaims().subscribe((data)=> this.claims=data);
  }

  

}

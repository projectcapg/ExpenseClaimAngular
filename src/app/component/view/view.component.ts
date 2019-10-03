import { Component, OnInit } from '@angular/core';
import { ExpenseClaimed } from 'src/app/model/expense-claimed';
import { ClaimService } from 'src/app/service/claim.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  flag: boolean;
  myVar: boolean; 
  id:number;
  claim: ExpenseClaimed 
  constructor(private view : ClaimService) { }

  ngOnInit() {
    
  }
  getExpenseDetails(id:String){
    this.flag = false;
    this.view.getExpenseById(id).subscribe((data)=>{this.claim=data;
      if (this.claim) {
        //this.service.setSearchedData(this.claim);
        this.flag = true;
      }
      else {
        this.flag = false;
      }
    }, error => { alert("Expense Id Not Found") }
    );
  }

}

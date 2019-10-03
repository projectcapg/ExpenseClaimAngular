import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/service/claim.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  del: string ;
  submitted = false;
  constructor(private expService: ClaimService) { }

  ngOnInit() {
  }

  deleteExpense(id: number) {
    this.submitted = true;
    this.expService.deleteExpence(id).subscribe(del => {
      if(del!=null){
        alert('Successful Deletion');
      }else{
        alert("Invalid ID");
      }
    });
  }

}

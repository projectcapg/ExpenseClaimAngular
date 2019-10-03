import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './component/update/update.component';
import { ClaimComponent } from './component/claim/claim.component';
import { ProjectComponent } from './component/project/project.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { AddclaimComponent } from './component/addclaim/addclaim.component';
import { ViewComponent } from './component/view/view.component';
import { DeleteComponent } from './component/delete/delete.component';
import { ViewAllComponent } from './component/view-all/view-all.component';



const routes: Routes = [
  { path: 'add', component:ClaimComponent },
  { path: 'project', component:ProjectComponent },
  { path: 'Expense', component:ExpenseComponent },
  { path: 'Claim', component:AddclaimComponent },
  { path: 'update', component: UpdateComponent},
  { path : 'view' , component : ViewComponent },
  { path : 'delete' , component : DeleteComponent },
  { path : 'viewall' , component : ViewAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

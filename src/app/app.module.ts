import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './component/update/update.component';
import { AddclaimComponent } from './component/addclaim/addclaim.component';
import { ClaimComponent } from './component/claim/claim.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { ProjectComponent } from './component/project/project.component';
import { ViewComponent } from './component/view/view.component';
import { DeleteComponent } from './component/delete/delete.component';
import { ViewAllComponent } from './component/view-all/view-all.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    AddclaimComponent,
    ClaimComponent,
    ExpenseComponent,
    ProjectComponent,
    ViewComponent,
    DeleteComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

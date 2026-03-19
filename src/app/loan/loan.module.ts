import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanEditComponent } from './loan-edit/loan-edit.component';



@NgModule({
  declarations: [
    LoanListComponent,
    LoanEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoanModule { }

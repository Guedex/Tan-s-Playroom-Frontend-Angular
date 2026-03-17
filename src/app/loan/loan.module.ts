import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './loan/loan.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanEditComponent } from './loan-edit/loan-edit.component';



@NgModule({
  declarations: [
    LoanComponent,
    LoanListComponent,
    LoanEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoanModule { }

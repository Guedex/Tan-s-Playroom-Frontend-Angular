import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { I18nSharedModule } from '../shared/i18n-shared.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    I18nSharedModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ]
})
/**
 * Feature module that encapsulates category management screens.
 */
export class CategoryModule { }

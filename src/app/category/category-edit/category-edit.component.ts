import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
/**
 * Dialog component to create or edit a category.
 */
export class CategoryEditComponent implements OnInit {

  category! : Category;

  constructor(
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService
  ) { }

  /**
   * Initializes form model from dialog data.
   */
  ngOnInit(): void {
    if (this.data.category != null) {
      this.category = Object.assign({}, this.data.category);
    }
    else {
      this.category = new Category();
    }
  }

  /**
   * Persists current category and closes dialog.
   */
  onSave() {
    this.categoryService.saveCategory(this.category).subscribe(result => {
      this.dialogRef.close();
    });    
  }  

  /**
   * Closes dialog without saving changes.
   */
  onClose() {
    this.dialogRef.close();
  }

}
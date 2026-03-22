import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';

import { Category } from '../model/Category';
import { CategoryService } from '../category.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
/**
 * List screen for category search, creation, edition and deletion.
 */
export class CategoryListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) {}

  /**
   * Opens category creation dialog.
   */
  createCategory() {    
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
  }

   /**
    * Opens category edition dialog.
    * @param category Category to edit.
    */
   editCategory(category: Category) {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: { category: category }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
  }

  /**
   * Requests category deletion after user confirmation.
   * @param category Category to delete.
   */
  deleteCategory(category: Category) {    
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: {
        title: this.translate.instant('category.delete_title'),
        description: this.translate.instant('category.delete_message')
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteCategory(category.id).subscribe(() => {
          this.loadCategories();
        });
      }
    });
  }  

  /**
   * Loads category table data.
   */
  ngOnInit(): void {
    this.loadCategories();
  }

  /**
   * Binds Material paginator to the table data source (client-side paging).
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Loads all categories from the API; the paginator slices rows locally.
   */
  loadCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.dataSource.data = categories;
    });
  }

}
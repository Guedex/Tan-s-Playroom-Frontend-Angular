import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from "../../core/dialog-confirmation/dialog-confirmation.component";
import { Pageable } from "../../core/Model/Page/Pageable";
import { AuthorEditComponent } from '../author-edit/author-edit.component';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';

@Component({
selector: 'app-author-list',
templateUrl: './author-list.component.html',
styleUrls: ['./author-list.component.scss']
})
/**
 * List screen for author pagination and CRUD actions.
 */
export class AuthorListComponent implements OnInit {

    pageNumber: number = 0;
    pageSize: number = 5;
    totalElements: number = 0;

    dataSource = new MatTableDataSource<Author>();
    displayedColumns: string[] = ['id', 'name', 'nationality', 'action'];

    constructor(
        private authorService: AuthorService,
        public dialog: MatDialog,
    ) { }

    /**
     * Loads first page on component init.
     */
    ngOnInit(): void {
        this.loadPage();
    }

    /**
     * Loads author page and refreshes table data.
     * @param event Optional paginator event.
     */
    loadPage(event?: PageEvent) {

        let pageable : Pageable =  {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            sort: [{
                property: 'id',
                direction: 'ASC'
            }]
        }

        if (event != null) {
            pageable.pageSize = event.pageSize
            pageable.pageNumber = event.pageIndex;
        }

        this.authorService.getAuthors(pageable).subscribe(data => {
            this.dataSource.data = data.content;
            this.pageNumber = data.pageable.pageNumber;
            this.pageSize = data.pageable.pageSize;
            this.totalElements = data.totalElements;
        });

    }  

    /**
     * Opens dialog to create a new author.
     */
    createAuthor() {      
        const dialogRef = this.dialog.open(AuthorEditComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });      
    }  

    /**
     * Opens dialog to edit selected author.
     * @param author Author to edit.
     */
    editAuthor(author: Author) {    
        const dialogRef = this.dialog.open(AuthorEditComponent, {
            data: { author: author }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });    
    }

    /**
     * Confirms and deletes selected author.
     * @param author Author to delete.
     */
    deleteAuthor(author: Author) {    
        const dialogRef = this.dialog.open(DialogConfirmationComponent, {
            data: { title: "Eliminar autor", description: "Atención si borra el autor se perderán sus datos.<br> ¿Desea eliminar el autor?" }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.authorService.deleteAuthor(author.id).subscribe(result =>  {
                    this.ngOnInit();
                }); 
            }
        });
    }  
}

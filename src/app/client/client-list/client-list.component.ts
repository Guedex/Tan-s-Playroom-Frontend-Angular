import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { Pageable } from '../../core/Model/Page/Pageable';
import { PageEvent } from '@angular/material/paginator';
import { DialogConfirmationComponent } from "../../core/dialog-confirmation/dialog-confirmation.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
/**
 * List screen for client pagination and CRUD actions.
 */
export class ClientListComponent {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Client>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) {}

  /**
   * Loads first page when component starts.
   */
  ngOnInit(): void {
    this.loadPage();
  }

  /**
   * Loads client data for current or selected page.
   * @param event Optional paginator event.
   */
  loadPage(event?: PageEvent) {
    let pageable : Pageable = 
    { pageNumber: this.pageNumber, 
      pageSize: this.pageSize,
      sort: [{ 
        property: 'id', 
        direction: 'ASC' }] 
      };
  

  if (event != null) {
    pageable.pageSize = event.pageSize;
    pageable.pageNumber = event.pageIndex;
  }

  this.clientService.getClients(pageable).subscribe(data => {
    this.dataSource.data = data.content;
    this.pageNumber = data.pageable.pageNumber;
    this.pageSize = data.pageable.pageSize;
    this.totalElements = data.totalElements;
  });

}
/**
 * Opens dialog to create a new client.
 */
createClient() {
  const dialogRef = this.dialog.open(ClientEditComponent, {
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
}


/**
 * Opens dialog to edit selected client.
 * @param client Client to edit.
 */
editClient(client: Client) {
  const dialogRef = this.dialog.open(ClientEditComponent, {
    data: { client: client }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
}

  /**
   * Confirms and deletes selected client.
   * @param client Client to delete.
   */
  deleteClient(client: Client) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: {
        title: this.translate.instant('client.delete_title'),
        description: this.translate.instant('client.delete_message')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.deleteClient(client.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }
}
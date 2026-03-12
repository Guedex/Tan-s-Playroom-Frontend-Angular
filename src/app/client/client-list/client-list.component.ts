import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { Pageable } from '../../core/Model/Page/Pageable';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Client>();
  displayedColumns: string[] = ['id', 'name'];

  constructor( private clientService: ClientService, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(event?: PageEvent) {
    let pageable : Pageable = 
    { pageNumber: this.pageNumber, 
      pageSize: this.pageSize,
      sort: [{ 
        property: 'id', 
        direction: 'ASC' }] };
  }
}

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoanService } from '../loan.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from '../../core/Model/Page/Pageable';
import { PageEvent } from '@angular/material/paginator';
import { Loan } from '../model/Loan';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss'
})
export class LoanListComponent {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Loan>();
  displayedColumns: string[] = ['id', 'clientId', 'gameId', 'date', 'returnDate', 'action'];

  constructor(private loanService: LoanService, public dialog: MatDialog) {
    this.loanService.getLoans(new Pageable(), 0, 0, "").subscribe(loans => this.dataSource.data = loans.content);
  }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(event?: PageEvent) {
    let pageable : Pageable = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sort: [{ property: 'id', direction: 'ASC' }]
    };
  }

  emtyMethod(element: any): void {
  }

  
}

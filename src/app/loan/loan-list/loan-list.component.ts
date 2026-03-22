import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoanService } from '../loan.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from '../../core/Model/Page/Pageable';
import { PageEvent } from '@angular/material/paginator';
import { Loan } from '../model/Loan';
import { LoanEditComponent } from '../loan-edit/loan-edit.component';
import { Client } from '../../client/model/Client';
import { Game } from '../../game/model/Game';
import { ClientService } from '../../client/client.service';
import { GameService } from '../../game/game.service';


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss'
})
/**
 * List screen for loan pagination, filtering and CRUD actions.
 */
export class LoanListComponent implements OnInit {

pageNumber: number = 0;
pageSize: number = 5;
totalElements: number = 0;

clients: Client[] = [];
games: Game[] = [];

filterGameId: number | null = null;
filterClientId: number | null = null;
filterDate: Date | null = null;

dataSource = new MatTableDataSource<Loan>();
displayedColumns: string[] = ['id', 'client', 'game', 'loanDate', 'returnDate', 'action'];

constructor(private loanService: LoanService, public dialog: MatDialog, private clientService: ClientService, private gameService: GameService) {}

/**
 * Loads first page on component init.
 */
ngOnInit(): void {
    this.loadPage();
    this.gameService.getGames().subscribe(games => this.games = games);
    this.clientService.getAllClients().subscribe(clients => this.clients = clients);
}

/**
 * Reapplies filters from the first page after a filter control changes.
 */
onFilterChange(): void {
    this.pageNumber = 0;
    this.loadPage();
}

/**
 * Resets all loan list filters and reloads the first page.
 */
clearFilters(): void {
    this.filterGameId = null;
    this.filterClientId = null;
    this.filterDate = null;
    this.onFilterChange();
}

private formatDateParam(d: Date): string {
    return d.toISOString().split('T')[0];
}

/**
 * Loads loan page data for current or selected paginator state.
 * @param event Optional paginator event.
 */
loadPage(event?: PageEvent) {
    if (event != null) {
        this.pageNumber = event.pageIndex;
        this.pageSize = event.pageSize;
    }

    let pageable: Pageable = {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: [{ property: 'id', direction: 'ASC' }]
    };

    const dateStr = this.filterDate != null ? this.formatDateParam(this.filterDate) : undefined;

    this.loanService.getLoans(
            pageable,
            this.filterClientId ?? undefined,
            this.filterGameId ?? undefined,
            dateStr)
        .subscribe(page => {
            this.dataSource.data = page.content;
            this.totalElements = page.totalElements;
        });

           
}

  /**
   * Opens dialog to create a new loan.
   */
  createLoan(): void {
    const dialogRef = this.dialog.open(LoanEditComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  /**
   * Opens dialog to edit selected loan.
   * @param element Loan row item.
   */
  editLoan(element: any): void {
    const dialogRef = this.dialog.open(LoanEditComponent, {
      data: { loan: element }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  /**
   * Confirms and deletes selected loan.
   * @param element Loan row item.
   */
  deleteLoan(element: any): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Eliminar préstamo", description: "Atención si borra el préstamo se perderán sus datos.<br> ¿Desea eliminar el préstamo?" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loanService.deleteLoan(element.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }
}

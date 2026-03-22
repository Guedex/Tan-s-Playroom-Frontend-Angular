import { Component, Inject, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../model/Loan';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from '../../game/game.service';
import { ClientService } from '../../client/client.service';
import { Game } from '../../game/model/Game';
import { Client } from '../../client/model/Client';
import { Pageable } from '../../core/Model/Page/Pageable';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';

@Component({
    selector: 'app-loan-edit',
    templateUrl: './loan-edit.component.html',
    styleUrl: './loan-edit.component.scss'
})
/**
 * Dialog component used to create or edit loans.
 */
export class LoanEditComponent implements OnInit {

    loan!: Loan;
    games: Game[] = [];
    clients: Client[] = [];

    constructor(
        private loanService: LoanService,
        private gameService: GameService,
        private clientService: ClientService,
        private dialog: MatDialog,
        public dialogRef: MatDialogRef<LoanEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    /**
     * Initializes model and loads dropdown data.
     */
    ngOnInit(): void {
        this.loan = this.data.loan ? Object.assign({}, this.data.loan) : new Loan();
        if (this.loan.id == null) {
            this.loadNextIdForCreate();
        }

        this.gameService.getGames().subscribe(games => this.games = games);
        const pageable: Pageable = {
            pageNumber: 0,
            pageSize: 100,
            sort: [{ property: 'id', direction: 'ASC' }]
        };
        this.clientService.getClients(pageable).subscribe(clients => this.clients = clients.content);
    }

    /**
     * Compares select options by id to preserve selected values.
     * @param o1 First option.
     * @param o2 Second option.
     * @returns True when both options represent the same entity.
     */
    compareById(o1: any, o2: any): boolean {
        return o1?.id === o2?.id;
    }

    /**
     * Persists loan and shows backend error message in dialog when needed.
     */
    onSave() {
        this.loanService.saveLoan(this.loan).subscribe({
            next: () => this.dialogRef.close(true),
            error: (err) => {
                this.dialog.open(DialogConfirmationComponent, {
                    data: {
                        title: 'Error',
                        description: this.getBackendErrorMessage(err)
                    }
                });
            }
        });
    }

    /**
     * Closes dialog without saving changes.
     */
    onClose() {
        this.dialogRef.close(false);
    }

    /**
     * Extracts a user-friendly error message from backend responses.
     * @param err HTTP error response object.
     * @returns Message text to display in UI.
     */
    private getBackendErrorMessage(err: any): string {
        if (typeof err?.error === 'string' && err.error.trim().length > 0) {
            return err.error;
        }
        if (typeof err?.error?.message === 'string' && err.error.message.trim().length > 0) {
            return err.error.message;
        }
        if (typeof err?.message === 'string' && err.message.trim().length > 0) {
            return err.message;
        }
        return 'Se ha producido un error inesperado al guardar el préstamo.';
    }

    /**
     * Preloads next id to display a non-editable identifier in create mode.
     */
    private loadNextIdForCreate(): void {
        const pageable: Pageable = {
            pageNumber: 0,
            pageSize: 1,
            sort: [{ property: 'id', direction: 'DESC' }]
        };

        this.loanService.getLoans(pageable).subscribe({
            next: (page) => {
                const lastId = page.content?.[0]?.id ?? 0;
                this.loan.id = lastId + 1;
            },
            error: () => {
                this.loan.id = 1;
            }
        });
    }
}

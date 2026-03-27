import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/model/Category';
import { GameEditComponent } from '../game-edit/game-edit.component';
import { GameService } from '../game.service';
import { Game } from '../model/Game';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import {
  extractHttpErrorText,
  isReferentialIntegrityDeleteError
} from '../../core/http-error.util';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.scss']
})
/**
 * List screen for game filtering and edit/create actions.
 */
export class GameListComponent implements OnInit {

    categories : Category[] = [];
    games!: Game[];
    filterCategory!: Category | null;
    filterTitle!: string | null;

    constructor(
        private gameService: GameService,
        private categoryService: CategoryService,
        public dialog: MatDialog,
        private translate: TranslateService,
    ) { }

    /**
     * Loads initial games and available categories.
     */
    ngOnInit(): void {

        this.gameService.getGames().subscribe(
            games => this.games = games
        );

        this.categoryService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    /**
     * Clears filters and performs a new search.
     */
    onCleanFilter(): void {
        this.filterTitle = null;
        this.filterCategory = null;
        this.onSearch();
    }

    /**
     * Searches games with active filters.
     */
    onSearch(): void {

        let title = this.filterTitle;
        let categoryId = this.filterCategory != null ? this.filterCategory.id : null;

        this.gameService.getGames(title!, categoryId!).subscribe(
            games => this.games = games
        );
    }

    /**
     * Opens dialog to create a game.
     */
    createGame() {    
        const dialogRef = this.dialog.open(GameEditComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });    
    }  

    /**
     * Opens dialog to edit selected game.
     * @param game Game to edit.
     */
    editGame(game: Game) {
        const dialogRef = this.dialog.open(GameEditComponent, {
            data: { game: game }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.onSearch();
        });
    }

    /**
     * Confirms and deletes a game after backend rules allow it.
     */
    deleteGame(game: Game): void {
        const dialogRef = this.dialog.open(DialogConfirmationComponent, {
            data: {
                title: this.translate.instant('game.delete_title'),
                description: this.translate.instant('game.delete_message')
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (!confirmed) {
                return;
            }
            this.gameService.deleteGame(game.id).subscribe({
                next: () => this.onSearch(),
                error: (err) => {
                    const description = isReferentialIntegrityDeleteError(err)
                        ? this.translate.instant('game.delete_error_blocked_loan')
                        : (extractHttpErrorText(err) ?? this.translate.instant('game.delete_error_unexpected'));
                    this.dialog.open(DialogConfirmationComponent, {
                        data: {
                            title: this.translate.instant('common.error'),
                            description
                        }
                    });
                }
            });
        });
    }
}

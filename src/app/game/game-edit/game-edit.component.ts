import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorService } from '../../author/author.service';
import { Author } from '../../author/model/Author';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/model/Category';
import { GameService } from '../game.service';
import { Game } from '../model/Game';

@Component({
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.scss']
})
/**
 * Dialog component used to create or edit games.
 */
export class GameEditComponent implements OnInit {

    game!: Game; 
    authors!: Author[];
    categories!: Category[];

    constructor(
        public dialogRef: MatDialogRef<GameEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private gameService: GameService,
        private categoryService: CategoryService,
        private authorService: AuthorService,
    ) { }

    /**
     * Initializes game model and loads author/category dropdown data.
     */
    ngOnInit(): void {
        if (this.data.game != null) {
            this.game = Object.assign({}, this.data.game);
        }
        else {
            this.game = new Game();
        }

        this.categoryService.getCategories().subscribe(
            categories => {
                this.categories = categories;

                if (this.game.category != null) {
                    let categoryFilter: Category[] = categories.filter(category => category.id == this.data.game.category.id);
                    if (categoryFilter != null) {
                        this.game.category = categoryFilter[0];
                    }
                }
            }
        );

        this.authorService.getAllAuthors().subscribe(
            authors => {
                this.authors = authors

                if (this.game.author != null) {
                    let authorFilter: Author[] = authors.filter(author => author.id == this.data.game.author.id);
                    if (authorFilter != null) {
                        this.game.author = authorFilter[0];
                    }
                }
            }
        );
    }

    /**
     * Saves game and closes dialog.
     */
    onSave() {
        this.gameService.saveGame(this.game).subscribe(result => {
            this.dialogRef.close();
        });    
    }  

    /**
     * Closes dialog without saving.
     */
    onClose() {
        this.dialogRef.close();
    }

}

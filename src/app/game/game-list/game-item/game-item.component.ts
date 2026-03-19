import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../model/Game';

@Component({
    selector: 'app-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.scss']
})
/**
 * Presentational card component used to render a single game.
 */
export class GameItemComponent implements OnInit {

    /** Game entity displayed by the card. */
    @Input() game!: Game;

    constructor() { }

    /**
     * Angular lifecycle hook reserved for future logic.
     */
    ngOnInit(): void {
    }

}

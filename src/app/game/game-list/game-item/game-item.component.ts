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

    /** Matches `public/foto{n}.png` files shipped with the app; newer games use `foto.png`. */
    private static readonly maxCoverAssetId = 8;

    /** Game entity displayed by the card. */
    @Input() game!: Game;

    constructor() { }

    /**
     * Angular lifecycle hook reserved for future logic.
     */
    ngOnInit(): void {
    }

    /** Cover URL: per-id image only when an asset exists; otherwise the shared placeholder. */
    get coverImageSrc(): string {
        const id = this.game?.id;
        if (id != null && id >= 1 && id <= GameItemComponent.maxCoverAssetId) {
            return `/foto${id}.png`;
        }
        return '/foto.png';
    }

}

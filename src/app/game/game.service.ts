import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './model/Game';

@Injectable({
    providedIn: 'root'
})
/**
 * Service responsible for game queries and persistence.
 */
export class GameService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Returns games filtered by optional title and category.
     * @param title Optional game title filter.
     * @param categoryId Optional category identifier filter.
     * @returns Observable list of games.
     */
    getGames(title?: String, categoryId?: number): Observable<Game[]> {            
        return this.http.get<Game[]>(this.composeFindUrl(title, categoryId));
    }

    /**
     * Creates or updates a game.
     * @param game Game to persist.
     * @returns Completion observable.
     */
    saveGame(game: Game): Observable<void> {
        let url = 'http://localhost:8080/game';

        if (game.id != null) {
            url += '/'+game.id;
        }

        return this.http.put<void>(url, game);
    }

    /**
     * Composes backend query URL for game filters.
     * @param title Optional title filter.
     * @param categoryId Optional category filter.
     * @returns Full URL including query string.
     */
    private composeFindUrl(title?: String, categoryId?: number) : string {
        let params = '';

        if (title != null) {
            params += 'title='+title;
        }

        if (categoryId != null) {
            if (params != '') params += "&";
            params += "idCategory="+categoryId;
        }

        let url = 'http://localhost:8080/game'

        if (params == '') return url;
        else return url + '?'+params;
    }
}

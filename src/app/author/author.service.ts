import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/Model/Page/Pageable';
import { Author } from './model/Author';
import { AuthorPage } from './model/AuthorPage';

@Injectable({
    providedIn: 'root'
})
/**
 * Service responsible for author CRUD and lookup operations.
 */
export class AuthorService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Returns a paginated list of authors.
     * @param pageable Pagination and sort information.
     * @returns Author page response.
     */
    getAuthors(pageable: Pageable): Observable<AuthorPage> {
        return this.http.post<AuthorPage>('http://localhost:8080/author', {pageable:pageable});
    }

    /**
     * Creates or updates an author.
     * @param author Author to persist.
     * @returns Completion observable.
     */
    saveAuthor(author: Author): Observable<void> {

        let url = 'http://localhost:8080/author';
        if (author.id != null) url += '/'+author.id;

        return this.http.put<void>(url, author);
    }

    /**
     * Deletes an author by id.
     * @param idAuthor Author id.
     * @returns Completion observable.
     */
    deleteAuthor(idAuthor : number): Observable<void> {
        return this.http.delete<void>('http://localhost:8080/author/'+idAuthor);
    }    

    /**
     * Returns all authors without pagination.
     * @returns Observable list of authors.
     */
    getAllAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>('http://localhost:8080/author');
    }

}

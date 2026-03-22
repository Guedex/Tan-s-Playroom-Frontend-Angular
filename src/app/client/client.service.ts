import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pageable } from '../core/Model/Page/Pageable';
import { Client } from './model/Client';
import { ClientPage } from './model/ClientPage';

let clientApiURL = 'http://localhost:8080/client';

@Injectable({
    providedIn: 'root'
})
/**
 * Service responsible for client CRUD and query operations.
 */
export class ClientService {

    
    constructor(
        private http: HttpClient
    ) { }
    
    /**
     * Returns paginated clients.
     * @param pageable Pagination and sorting data.
     * @returns Client page.
     */
    getClients(pageable: Pageable): Observable<ClientPage> {
        return this.http.post<ClientPage>(clientApiURL, {pageable:pageable});
    }

    /**
     * Creates or updates a client.
     * @param client Client to persist.
     * @returns Completion observable.
     */
    saveClient(client: Client): Observable<void> {
        const url =
          client.id != null
            ? `${clientApiURL}/${client.id}`
            : clientApiURL;

        return this.http.put<void>(url, client);
      }

    /**
     * Deletes a client by id.
     * @param idClient Client identifier.
     * @returns Completion observable.
     */
    deleteClient(idClient : number): Observable<void> {
        return this.http.delete<void>(clientApiURL+'/'+idClient);
    }

    /**
     * Returns all clients by requesting a single large page from the paginated POST endpoint.
     * (GET /client is not exposed on the backend; list queries use POST with pageable.)
     * @returns Observable list of clients.
     */
    getAllClients(): Observable<Client[]> {
        const pageable: Pageable = {
            pageNumber: 0,
            pageSize: 10_000,
            sort: [{ property: 'id', direction: 'ASC' }]
        };
        return this.getClients(pageable).pipe(map((page) => page.content));
    }
}
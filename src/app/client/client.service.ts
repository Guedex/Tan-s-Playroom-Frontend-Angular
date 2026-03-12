import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/Model/Page/Pageable';
import { Client } from './model/Client';
import { ClientPage } from './model/ClientPage';

let clientApiURL = 'http://localhost:8080/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    
    constructor(
        private http: HttpClient
    ) { }
    

    getClients(pageable: Pageable): Observable<ClientPage> {
        return this.http.post<ClientPage>(clientApiURL, {pageable:pageable});
    }

    saveClient(client: Client): Observable<void> {
        if (client.id != null) clientApiURL += '/'+client.id;

        return this.http.put<void>(clientApiURL, client);
    }

    deleteClient(idClient : number): Observable<void> {
        return this.http.delete<void>(clientApiURL+idClient);
    }

    getAllClients(): Observable<Client[]> {
        return this.http.get<Client[]>(clientApiURL);
    }
}
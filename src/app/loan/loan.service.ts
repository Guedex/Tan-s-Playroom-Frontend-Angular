import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pageable } from '../core/Model/Page/Pageable';
import { LoanPage } from './model/LoanPage';
import { Loan } from './model/Loan';
let loanApiURL = 'http://localhost:8080/loan';

@Injectable({
    providedIn: 'root'
})
/**
 * Service responsible for loan CRUD and filtered/paginated queries.
 */
export class LoanService {

    constructor(private http: HttpClient) { }

    /**
     * Returns paginated loans with optional filters.
     * @param pageable Pagination and sort details.
     * @param clientId Optional client id filter.
     * @param gameId Optional game id filter.
     * @param date Optional loan date filter.
     * @returns Loan page response.
     */
    getLoans(pageable: Pageable, clientId?: number, gameId?: number, date?: string): Observable<LoanPage> {

        let params: any = {
            page: pageable.pageNumber,
            size: pageable.pageSize,
            sort: pageable.sort.map(sort => sort.property + ',' + sort.direction).join(',')
        };
        if (clientId != null) 
            params.clientId = clientId;
        if (gameId != null) 
            params.gameId = gameId;
        if (date != null) 
            params.date = date;


        return this.http.get<LoanPage>(loanApiURL, {params});
    }

    /**
     * Creates or updates a loan.
     * @param loan Loan entity to persist.
     * @returns Completion observable.
     */
    saveLoan(loan: Loan): Observable<void> {
        if (loan.id != null)
            return this.http.put<void>(loanApiURL + '/' + loan.id, loan);
        else
            return this.http.post<void>(loanApiURL, loan);
    }
    

    /**
     * Deletes a loan by identifier.
     * @param idLoan Loan id.
     * @returns Completion observable.
     */
    deleteLoan(idLoan: number): Observable<void> {
        return this.http.delete<void>(loanApiURL+'/'+idLoan);
    }



}
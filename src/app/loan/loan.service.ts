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
export class LoanService {

    constructor(private http: HttpClient) { }

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

    saveLoan(loan: Loan): Observable<void> {
        if (loan.id != null)
            return this.http.put<void>(loanApiURL + '/' + loan.id, loan);
        else
            return this.http.post<void>(loanApiURL, loan);
    }
    

    deleteLoan(idLoan: number): Observable<void> {
        return this.http.delete<void>(loanApiURL+'/'+idLoan);
    }



}
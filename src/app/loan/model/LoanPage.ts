import { Pageable } from "../../core/Model/Page/Pageable";
import {Loan} from "./Loan";

export class LoanPage{
    content!: Loan[];
    pageable!: Pageable;
    totalElements!: number;
}
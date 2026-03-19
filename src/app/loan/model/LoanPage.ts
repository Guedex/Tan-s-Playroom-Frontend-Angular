import { Pageable } from "../../core/Model/Page/Pageable";
import {Loan} from "./Loan";

/**
 * Paginated response model for loan queries.
 */
export class LoanPage{
    /** Items in current page. */
    content!: Loan[];
    /** Pagination metadata. */
    pageable!: Pageable;
    /** Total records available. */
    totalElements!: number;
}
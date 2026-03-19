import { Pageable } from "../../core/Model/Page/Pageable";
import { Author } from "./Author"; 

/**
 * Paginated response model for author queries.
 */
export class AuthorPage {
    /** Result items of the current page. */
    content!: Author[];
    /** Pagination metadata returned by backend. */
    pageable!: Pageable;
    /** Total number of available records. */
    totalElements!: number;
}

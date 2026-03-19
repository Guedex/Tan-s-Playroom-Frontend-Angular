import { Pageable } from "../../core/Model/Page/Pageable";
import { Client } from "./Client";

/**
 * Paginated response model for client queries.
 */
export class ClientPage {
    /** Items in the current page. */
    content!: Client[];
    /** Pagination metadata. */
    pageable!: Pageable;
    /** Total amount of records available. */
    totalElements!: number;
}
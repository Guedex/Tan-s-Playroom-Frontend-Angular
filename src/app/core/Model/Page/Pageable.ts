import { SortPage } from './SortPage';

/**
 * Pagination contract sent to backend list endpoints.
 */
export class Pageable {
    /** Zero-based page index. */
    pageNumber!: number;
    /** Number of records requested per page. */
    pageSize!: number;
    /** Sort criteria list applied by backend. */
    sort!: SortPage[];
}

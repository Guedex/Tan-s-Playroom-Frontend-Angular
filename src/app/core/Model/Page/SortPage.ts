/**
 * Sort criterion used in pageable requests.
 */
export class SortPage {
    /** Property name used for ordering. */
    property!: String;
    /** Direction of ordering (ASC or DESC). */
    direction!: String;
}

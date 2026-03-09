import { Pageable } from "../../core/Model/Page/Pageable";
import { Author } from "./Author"; 


export class AuthorPage {
    content!: Author[];
    pageable!: Pageable;
    totalElements!: number;
}

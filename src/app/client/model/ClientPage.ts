import { Pageable } from "../../core/Model/Page/Pageable";
import { Client } from "./Client";

export class ClientPage {
    content!: Client[];
    pageable!: Pageable;
    totalElements!: number;
}
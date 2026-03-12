import { ClientPage } from "./ClientPage";

export const CLIENT_DATA: ClientPage = {
    content: [
        { id: 1, name: 'Juan Perez' },
        { id: 2, name: 'Maria Gomez' },
        { id: 3, name: 'Pedro Rodriguez' },
        { id: 4, name: 'Ana Lopez' },
        { id: 5, name: 'Luis Martinez' },
    ],
    pageable: {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 5
}
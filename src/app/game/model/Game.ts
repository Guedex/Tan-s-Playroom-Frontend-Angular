import { Category } from "../../category/model/Category";
import { Author } from "../../author/model/Author";

/**
 * Domain model representing a game.
 */
export class Game {
    /** Unique identifier. */
    id!: number;
    /** Display title. */
    title!: string;
    /** Recommended minimum age. */
    age!: number;
    /** Associated category. */
    category!: Category;
    /** Associated author. */
    author!: Author;
}

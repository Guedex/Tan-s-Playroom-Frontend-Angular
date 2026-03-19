import { Client } from "../../client/model/Client";
import { Game } from "../../game/model/Game";

/**
 * Domain model representing a game loan.
 */
export class Loan {
    /** Unique identifier. */
    id!: number;
    /** Client associated to the loan. */
    client!: Client;
    /** Game associated to the loan. */
    game!: Game;
    /** Loan start date. */
    loanDate!: Date;
    /** Loan return date. */
    returnDate!: Date;
}

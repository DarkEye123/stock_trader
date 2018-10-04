import {
    Portfolio
} from './portfolio';
export class User {
    constructor(name, funds, currency = "czk") {
        this.name = name;
        this.funds = funds;
        this.currency = currency;
        this.portfolio = new Portfolio();
    }
}
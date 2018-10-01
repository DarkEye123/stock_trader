import {
    UserStock
} from './stock';
export class User {
    constructor(name, funds, currency = "czk") {
        this.name = name;
        this.funds = funds;
        this.currency = currency;
        this.portfolio = new Portfolio();
    }
}

class Portfolio {
    constructor() {
        this.stocks = [];
    }

    add(newStock, quantity) {
        let stock = this.stocks.find((ownedStock) => ownedStock.name === newStock.name);
        if (stock) {
            stock.quantity += quantity;
        } else {
            stock = newStock;
            this.stocks.push(new UserStock(stock.name, quantity));
        }
    }
}

export function fetchData() {
    return new User(
        "Matej",
        10000
    );
}
export class Stock {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class UserStock extends Stock {
    constructor(name, quantity) {
        super(name, 0);
        this.quantity = quantity;
    }
}

export function syncUserStockData(appUser) {
    appUser.portfolio.stocks.forEach((stock) => {
        let indexStock = stockIndex.find((indexStock) => indexStock.name === stock.name);
        stock.price = indexStock.price;
    });
}


const stockIndex = [new Stock("Google", 350), new Stock("Amazon", 215), new Stock("Ideal Inc.", 155), new Stock("Xtreme bikes", 12)];

export function fetchStocks() {
    return stockIndex;
}
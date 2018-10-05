import {
    Stock
} from '../models/stock';

const stockIndex = [new Stock("Google", 350), new Stock("Amazon", 215), new Stock("Ideal Inc.", 155), new Stock("Xtreme bikes", 12)];

export function syncUserStockData(appUser) {
    appUser.portfolio.stocks.forEach((stock) => {
        let indexStock = stockIndex.find((indexStock) => indexStock.name === stock.name);
        stock.price = indexStock.price;
    });
}

export function fetchStocks() {
    return stockIndex;
}

export function getStock(stocks, stock) {
    return stocks.find(s => s.name === stock.name);
}


function computeNewPrice(price, maxChange = 25) {
    let c = 0;
    let changeDirection = {
        up: Math.random() > 0.5,
        down: Math.random() > 0.5
    };
    if (changeDirection.up) {
        c = price * (maxChange / 100);
        price += Math.random() * c;
        console.log("went up to", price);
    }
    if (changeDirection.down) {
        c = price * (maxChange / 100);
        price -= Math.random() * c;
        console.log("went down to", price);
    }
    return Math.floor(price);
}

export function simulate() {
    stockIndex.forEach(stock => {
        console.log("computing for", stock.name);
        stock.price = computeNewPrice(stock.price);
    });
}
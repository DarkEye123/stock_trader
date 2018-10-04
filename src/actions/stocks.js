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
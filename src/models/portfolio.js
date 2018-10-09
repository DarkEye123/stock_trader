import {
    UserStock
} from './stock';

import {
    getValidNumber
} from "../common.js";

import {
    getStock
} from '../actions/stocks';

export class Portfolio {
    constructor() {
        this.stocks = [];
    }

    add(newStock, quantity) {
        let stock = getStock(this.stocks, newStock);
        if (stock) {
            stock.quantity += quantity;
        } else {
            stock = newStock;
            quantity = getValidNumber(quantity);
            this.stocks.push(new UserStock(stock.name, quantity));
        }
    }

    remove(stockToSell, quantity) {
        let stock = getStock(this.stocks, stockToSell);
        quantity = getValidNumber(quantity);
        let quantityDiff = stock.quantity - quantity;
        if (quantityDiff <= 0) {
            this.stocks.splice(this.stocks.indexOf(stock), 1);
            return stock.quantity;
        } else {
            stock.quantity -= quantity;
            return quantity;
        }
    }

    serialize() {
        return JSON.stringify(this.stocks);
    }

    deserialize(stocks) {
        this.stocks = JSON.parse(stocks);
    }
}
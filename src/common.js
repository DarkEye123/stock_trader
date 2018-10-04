function verifyNumber(number) {
    return Number(number) >= 0;
}

export function getValidNumber(number) {
    if (verifyNumber(number)) {
        return Number(number);
    }
    return 0;
}

export function computeFinalPrice(stock, quantity) {
    // TODO add stock verification price -- Nice to have, for demo this is ok though
    let price = getValidNumber(stock.price);
    quantity = getValidNumber(quantity);
    return quantity * price;
}

export function getStock(stocks, stock) {
    return stocks.find(s => s.name === stock.name);
}
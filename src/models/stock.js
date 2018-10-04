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
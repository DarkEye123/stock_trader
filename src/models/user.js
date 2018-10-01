export class User {
    constructor(name, funds, currency = "czk") {
        this.name = name;
        this.funds = funds;
        this.currency = currency;
    }
}

export function fetch_data() {
    return new User(
        "Matej",
        10000
    );
}
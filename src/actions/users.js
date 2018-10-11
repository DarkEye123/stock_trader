import {
    User
} from '../models/user';

export function fetchData() {
    return new User(
        "Matej",
        10000
    );
}

export function generateId(size = 16) {
    let id = Math.random().toString(10).substring(2);
    if (id.length < size) {
        id += "0".repeat(size - id.length);
    }
    return id;
}

export function saveUser(axios, user) {
    axios
        .put(`${user.id}.json`, {
            portfolio: user.portfolio.serialize(),
            funds: user.funds
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            alert(error);
        });
}

export function loadUser(axios, user) {
    axios
        .get(`${user.id}.json`)
        // if function(response) is used 'this' keyword is undefined
        .then(response => {
            console.log(response.data);
            user.portfolio.deserialize(response.data.portfolio);
            user.funds = response.data.funds;
        })
        .catch(function(error) {
            alert(error);
        });
}
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
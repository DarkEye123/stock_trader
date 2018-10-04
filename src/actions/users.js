import {
    User
} from '../models/user';

export function fetchData() {
    return new User(
        "Matej",
        10000
    );
}
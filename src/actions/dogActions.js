import { FETCH_DOGS } from "./types";

export const fetchDogs = () => dispatch => {
    fetch('http://localhost:3001/dogs')
    .then(response => response.json())
    .then(data => console.log(data))
}
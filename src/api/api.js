import axios from "axios";

const toDoList = axios.create({
  baseURL: "https://localhost:7269/items",
});

export function getToDoList() {
  return toDoList
    .get()
    .then(response => response)
    .catch((error) => {
        return error;
    })
}

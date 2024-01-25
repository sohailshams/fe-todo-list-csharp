import axios from "axios";

const toDoList = axios.create({
    baseURL: "https://localhost:7269/",
});

export function getToDoList() {
    return toDoList
        .get('items')
        .then(response => response)
        .catch((error) => {
            return error;
        })
}

export function deleteToDoListItem(id) {
    return toDoList
        .delete(`item`, {
            params: {
                id: `${id}`,
            }
        })
        .then(response => response)
        .catch((error) => {
            return error;
        })
}

export function updateToDoListItem(id, title, description) {
    console.log(id, title, description)
    return toDoList
        .post(`updateItem`, {

            id: `${id}`,
            title: `${title}`,
            description: `${description}`

        })
        .then(response => response)
        .catch((error) => {
            return error;
        })
}
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

    console.log('id in api', id)
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

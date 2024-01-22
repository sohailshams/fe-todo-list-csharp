import { useState } from "react"
import { useEffect } from "react"
import { getToDoList } from "../api/api";

import axios from "axios";

function TodoList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getToDoList().then(response => {
            if (response.status == 200) {
                setItems(response.data)
            } else {
                alert('error')
            }

        })
    }, [])
    return (
        <div>
            {items?.map((item) => {
                return <p>{item.title}</p>
            })}
        </div>
    )
}

export default TodoList

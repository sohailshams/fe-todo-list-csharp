import { useState } from "react"
import { useEffect } from "react"
import { getToDoList } from "../api/api";

import axios from "axios";
import TodolistCard from "./TodolistCard";

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
        <div className="w-[80%] flex flex-wrap gap-x-5 mx-auto shadow-lg px-7 py-5">
            {items?.map((item) => {
                return <TodolistCard key={item.id} title={item.title} description={item.description} />
            })}
        </div>
    )
}

export default TodoList

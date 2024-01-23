import { useState } from "react"
import { useEffect } from "react"
import { getToDoList } from "../api/api";
import TodolistCard from "./TodolistCard";

function TodoList() {
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        getToDoList().then(response => {
            if (response.status == 200) {
                setItems(response.data)
            } else {
                setErrorMessage("There was an error while getting tasks, please try!")
            }
        })
    }, [])
    return (
        <>

            <p className={errorMessage ? "text-center bg-red-500 py-3 text-white font-bold" : "hidden"} id="error">{errorMessage}</p>
            <div className="w-[80%] flex flex-wrap gap-x-5 mx-auto shadow-lg px-7 py-5">
                {items?.map((item) => {
                    return <TodolistCard key={item.id} title={item.title} description={item.description} setItems={setItems} id={item.id} setErrorMessage={setErrorMessage} />
                })}
            </div>
        </>
    )
}

export default TodoList

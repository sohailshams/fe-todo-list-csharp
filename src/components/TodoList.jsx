import { useState } from "react"
import { useEffect } from "react"
import { getToDoList } from "../api/api";
import TodolistCard from "./TodolistCard";
import AddTask from "./AddTask";

function TodoList() {
    const [items, setItems] = useState([]);
    const [isAddTask, setIsAddTask] = useState(false);
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
            <div className="relative mb-28">

                <div className='absolute left-32'>
                    {isAddTask === false ? <i onClick={() => setIsAddTask(true)} className="fa-solid fa-plus"></i> : <AddTask setItems={setItems} setErrorMessage={setErrorMessage} setIsAddTask={setIsAddTask} />}

                </div>
            </div>
            <div className="w-[80%] flex flex-wrap gap-x-5 mx-auto shadow-lg px-7 py-5">
                {items?.map((item, index) => {
                    return <TodolistCard key={index} title={item.title} description={item.description} setItems={setItems} id={item.id} setErrorMessage={setErrorMessage} index={index} />
                })}
            </div>
        </>
    )
}

export default TodoList

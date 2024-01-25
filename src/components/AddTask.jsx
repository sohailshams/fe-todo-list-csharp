
import React, { useState } from "react";
import { addToDoListItem } from "../api/api";

function AddTask({ setItems, setErrorMessage, setIsAddTask }) {
    const [addTask, setAddTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        if (e.target.name === "title") {
            setAddTask({ ...addTask, [e.target.name]: e.target.value });
        }
        if (e.target.name === "description") {
            setAddTask({ ...addTask, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddTask({ title: "", description: "" });

        // Adding task to the DB
        addToDoListItem(addTask.title, addTask.description)
            .then((response) => {
                if (response.status === 200) {
                    setIsAddTask(false)
                    setItems((preItems) => {
                        return [...preItems, addTask];
                    });
                } else {
                    setItems((preItems) => {
                        setErrorMessage(response.response.data)
                        return [...preItems];
                    });
                }
            })
    };

    return (
        <form className="border border-[1px] border-black my-3 w-80 py-3 px-1 text-center flex flex-col" onSubmit={handleSubmit}>
            <label className="hidden" htmlFor="name">Title:</label>
            <input
                onChange={handleInputChange}
                className="text-center font-bold focus:outline-none focus:ring-0 border-0"
                type="text"
                name="title"
                value={addTask.title}
                placeholder="Title"
                id="title"
                required
            />

            <label className="hidden" htmlFor="category">Description:</label>
            <input
                onChange={handleInputChange}
                className="text-center font-bold focus:outline-none focus:ring-0 border-0"
                type="text"
                name="description"
                value={addTask.description}
                placeholder="description"
                id="description"
                required
            />
            <div className="flex justify-center items-center mt-1">
                <button><i className="fa-solid fa-floppy-disk"></i></button>
                <i onClick={() => setIsAddTask(false)} className="pl-3 fa-solid fa-xmark"></i>
            </div>
        </form>
    );
}

export default AddTask;

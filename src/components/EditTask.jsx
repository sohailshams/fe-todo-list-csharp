import { useState } from "react";
import { updateToDoListItem } from "../api/api";

function EditTask({ id, title, description, setIsTasks, setItems, index, setErrorMessage }) {
    const [editTask, setEditTask] = useState({
        title: title,
        description: description
    });

    const handleEditChange = (e) => {
        if (e.target.name === "title") {
            setEditTask({ ...editTask, [e.target.name]: e.target.value });
        }
        if (e.target.name === "description") {

            setEditTask({ ...editTask, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateToDoListItem(id, editTask.title, editTask.description)

            .then((response) => {
                if (response.status === 200) {
                    setItems((preItems) => {
                        // make a copy of taks
                        const tasksCopy = [...preItems];

                        // get the task to be updated
                        const taskToReplace = tasksCopy[index];

                        // update the product
                        taskToReplace.title = editTask.title;
                        taskToReplace.description = editTask.description;

                        // replace the item at specified index
                        tasksCopy[index] = taskToReplace;

                        // close task edit form
                        setIsTasks(true);
                        return tasksCopy;
                    });
                } else {
                    setItems((preItems) => {
                        setIsTasks(true);
                        setErrorMessage(response.response.data)
                        return [...preItems];
                    });
                }
            })
    };

    return (
        <form className="border border-[1px] border-black my-3 w-80 py-3 px-1 text-center" onSubmit={handleSubmit} >
            <div className='mb-3 flex justify-center items-center'>
                <button><i className="fa-solid fa-floppy-disk"></i></button>
                <i onClick={() => setIsTasks(true)} className="pl-3 fa-solid fa-xmark"></i>
                <label className="hidden" htmlFor="title">Title:</label>
                <input
                    onChange={handleEditChange}
                    className="text-center font-bold focus:outline-none focus:ring-0 border-0"
                    type="text"
                    name="title"
                    value={editTask.title}
                    placeholder="Title"
                    id="title"
                    required
                />
            </div>
            <label className="hidden" htmlFor="description">Description:</label>
            <input
                onChange={handleEditChange}
                className="text-center focus:outline-none focus:ring-0 border-0"
                type="text"
                name="description"
                value={editTask.description}
                placeholder="Description"
                id="description"
                required
            />
        </form>
    )
}

export default EditTask

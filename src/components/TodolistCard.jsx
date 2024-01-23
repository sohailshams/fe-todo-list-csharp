import React, { useState } from 'react'
import { deleteToDoListItem } from '../api/api';

function TodolistCard({ id, title, description, setItems, setErrorMessage }) {

    const handleDelete = (e) => {
        deleteToDoListItem(id).then(response => {
            if (response.status == 200) {
                setItems((preItems) => preItems.filter(item => item.id != id))
            } else {

                setItems((preItems) => {
                    setErrorMessage(response.response.data)
                    return [...preItems];
                });

            }
        })
    }
    return (
        <div className='border border-[1px] border-black my-3 w-48 py-3 px-1 text-center'>

            <div className='mb-3 flex justify-center items-center gap-x-1'>
                <i onClick={handleDelete}
                    name={id} className="fa-solid fa-trash"></i>
                <i className="pl-3 fa-solid fa-pencil"></i>
                <h2 className='pl-1 text-lg font-bold mb-1'>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TodolistCard

import React from 'react'

function TodolistCard({ title, description }) {
    return (
        <div className='border border-[1px] border-black my-3 w-48 py-3 px-1 text-center'>

            <div className='mb-3 flex justify-center gap-x-1'>
                <button><i class="fa-solid fa-trash"></i></button>
                <button className='pl-3'><i class="fa-solid fa-pencil"></i></button>
                <h2 className='pl-1 text-lg font-bold mb-1'>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TodolistCard

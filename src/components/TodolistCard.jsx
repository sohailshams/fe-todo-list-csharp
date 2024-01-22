import React from 'react'

function TodolistCard({ title, description }) {
    return (
        <div className='border border-[1px] border-black my-3 w-48 py-3 px-1 text-center'>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default TodolistCard

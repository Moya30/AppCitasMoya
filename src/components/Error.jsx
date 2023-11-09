import React from 'react'

export const Error = ({mensaje}) => {
    return (
        <div className='text-red-600'>
            <p> {mensaje} </p>
        </div>
    )
}

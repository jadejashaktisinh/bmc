import React from 'react'

export default function ButtonFilled(props: { text: string }) {
    return (
        <button className='text-2xl text-white px-6 py-4 rounded-lg bg-[#000B60] cursor-pointer'>
            {props.text}
        </button>
    )
}

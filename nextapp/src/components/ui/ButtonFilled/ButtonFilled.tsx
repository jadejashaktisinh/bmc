import React from 'react'

export default function ButtonFilled(props: { text: string, bg?: string, class?: string }) {
    return (
        <button className={`text-2xl text-white px-6 py-4 rounded-lg cursor-pointer ${props.class}`} style={{ background: props.bg ? props.bg : '#000B60' }}>
            {props.text}
        </button>
    )
}

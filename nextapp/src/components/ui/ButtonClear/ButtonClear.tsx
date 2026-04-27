import React from 'react'

export default function ButtonClear(props: { text: string , bordered?:boolean }) {
  return (
    <button className={`text-[#1E1B4B] text-2xl font-bold cursor-pointer ${props.bordered ? 'py-4 w-full border border-solid border-[#000B60]' : ''}`}>
      {props.text}
    </button>
  )
}

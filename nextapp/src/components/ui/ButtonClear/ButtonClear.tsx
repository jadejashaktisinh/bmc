import React from 'react'

export default function ButtonClear(props: { text: string }) {
  return (
    <button className='text-[#1E1B4B] text-2xl cursor-pointer'>
      {props.text}
    </button>
  )
}

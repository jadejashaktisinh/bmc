import React from 'react'

export default function ButtonIcon(props: { text: string }) {
  return (
    <button className='text-[#1E1B4B] text-2xl cursor-pointer border text-[#181C1E] text-[1.3rem] font-bold leading-[1.7rem] px-8 py-4 border-solid border-[#C6C5D4] rounded-lg'>
      {props.text}
    </button>
  )
}

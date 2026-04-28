import React from 'react'

export default function ScaleCard({scale,tag}:{scale:string,tag:string}) {
    return (
        <div className='bg-[#14228380] p-6 rounded-lg w-6/12 shrink-0'>
            <p className='text-3xl text-[#68FADD]'>{scale}</p>
            <p>{tag}</p>
        </div>
    )
}

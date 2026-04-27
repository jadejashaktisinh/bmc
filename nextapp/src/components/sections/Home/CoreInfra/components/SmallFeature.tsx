import React from 'react'

export default function SmallFeature({ icon, heading, text }: { icon: React.ReactNode, heading: string, text: string }) {
    return (
        <div className='col-[span_4] bg-[#E0E3E6] p-8 flex flex-col gap-2 rounded-3xl'>
            {icon}
            <h4 className='text-xl font-black leading-7 mt-2'>{heading}</h4>
            <p className='text-sm leading-5 text-[#454652]'>{text}</p>
        </div>
    )
}

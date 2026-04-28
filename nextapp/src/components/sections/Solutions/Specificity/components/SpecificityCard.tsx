import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


type Props = {
    icon:React.ReactNode,
    heading:string,
    details:string,
    list:string[]
}
export default function SpecificityCard({icon,heading,details,list}:Props) {
    return (
        <div className='p-10 bg-[white] rounded-[32px] flex justify-between flex-col'>
            <div className='flex flex-col gap-4'>
                {icon}
                <h3 className='text-3xl font-black leading-9 mt-2'>{heading}</h3>
                <p className='text-base leading-[26px]'>
                   {details}
                </p>
                <ul className="mb-24 flex flex-col gap-4">
                    {
                        list.map((item, i) => (
                            <li key={i} className="flex gap-3 text-base leading-6 text-[#454652] items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-[#006B5C]" />{item}</li>
                        ))
                    }
                </ul>

                <hr className='bg-[#EBEEF1] h-1 text-[#EBEEF1]'/>
            </div>

        </div>
    )
}

import React from 'react'
import ButtonFilled from '../ButtonFilled/ButtonFilled'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
    bulletText:string,
    headPart1:string,
    headPart2:string,
    details:string
    buttonFisrt:React.ReactNode,
    buttonSecond:React.ReactNode
}

export default function CommonHeroLeftSide(props:Props) {
    return (
        <div className='flex flex-col gap-6 basis-1/2'>
            <p className='font-medium text-[#007261] bg-[#68FADD] w-fit px-4 py-2 rounded-[0.7rem]'>{props.bulletText}</p>
            <h1 className='text-7xl max-w-lg font-black'>{props.headPart1} <span className='text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(0,107,92,1)_0%,rgba(237,221,83,1)_100%)]'>{props.headPart2}</span></h1>
            <p className='text-[1.4rem] text-[#454652] leading-6 max-w-screen-sm pt-2'>{props.details}</p>
            <div className='flex gap-4 pt-4'>
                {props.buttonFisrt}{props.buttonSecond}
            </div>
        </div>
    )
}

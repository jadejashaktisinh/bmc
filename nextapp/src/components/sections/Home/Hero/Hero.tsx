import ButtonFilled from '@/components/ui/ButtonFilled/ButtonFilled'
import ButtonIcon from '@/components/ui/ButtonIcon/ButtonIcon'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
export default function Hero() {
  return (
    <div className='px-8 py-32'>
      <div className='flex gap-16 items-center'>
        <div className='flex flex-col gap-6 basis-1/2'>
          <p className='font-medium text-[#007261] bg-[#68FADD] w-fit px-4 py-2 rounded-[0.7rem]'>EVOLUTIONARY ARCHITECTURE</p>
          <h1 className='text-7xl max-w-lg font-black'>Build Your <span className='text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(0,107,92,1)_0%,rgba(237,221,83,1)_100%)]'>Business Hub</span></h1>
          <p className='text-[1.4rem] text-[#454652] leading-6 max-w-screen-sm pt-2'>The definitive enterprise engine for multi-tenant
            scaling and headless content management.
            Precision-engineered for modern digital ecosystems.</p>
          <div className='flex gap-4 pt-4'>
            <ButtonFilled text='Get Started' />
            <ButtonIcon icon={<FontAwesomeIcon icon={faCirclePlay} />} text={"Watch Demo"} />
          </div>
        </div>
        <div
          className="flex justify-center basis-1/2 bg-white p-4 rounded-2xl"
          style={{
            boxShadow: '143px -145px 63px -65px rgba(0, 107, 92, 0.1), -138px 159px 63px -65px rgba(0, 11, 96, 0.1)',
            WebkitBoxShadow: '143px -145px 63px -65px rgba(0, 107, 92, 0.1), -138px 159px 63px -65px rgba(0, 11, 96, 0.1)',
            MozBoxShadow: '143px -145px 63px -65px rgba(0, 107, 92, 0.1), -138px 159px 63px -65px rgba(0, 11, 96, 0.1)'
          }}
        > <Image
            src={'/Dashboard-Analytics.png'}
            alt='Dashboard Analytics'
            width={1000}
            height={1000}
            className='w-full h-full rounded-2xl'
          />
        </div>
      </div>
    </div>
  )
}

import ButtonFilled from '@/components/ui/ButtonFilled/ButtonFilled'
import ButtonIcon from '@/components/ui/ButtonIcon/ButtonIcon'
import CommonHeroLeftSide from '@/components/ui/CommonHeroLeftSide/CommonHeroLeftSide'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
export default function Hero() {
  return (
    <div className='px-8 py-32'>
      <div className='flex gap-16 items-center'>
        <CommonHeroLeftSide
          bulletText='EVOLUTIONARY ARCHITECTURE'
          headPart1='Build Your '
          headPart2='Business Hub.'
          details='The definitive enterprise engine for multi-tenant scaling and headless content management. Precision-engineered for modern digital ecosystems.'
          buttonFisrt={<ButtonFilled text='Get Started' />}
          buttonSecond={<ButtonIcon icon={<FontAwesomeIcon icon={faCirclePlay} />} text={"Watch Demo"} />}
        />
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

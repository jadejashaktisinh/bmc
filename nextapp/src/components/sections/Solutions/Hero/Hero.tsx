import ButtonFilled from '@/components/ui/ButtonFilled/ButtonFilled'
import ButtonIcon from '@/components/ui/ButtonIcon/ButtonIcon'
import CommonHeroLeftSide from '@/components/ui/CommonHeroLeftSide/CommonHeroLeftSide'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
export default function Hero() {
    return (
        <div className='px-8 py-32'>
            <div className='flex gap-16 items-center'>
                <CommonHeroLeftSide 
                    bulletText='BUILT FOR EXCELLENCE' 
                    headPart1='The Blueprint for ' 
                    headPart2='Digital Authority.' 
                    details='The definitive enterprise engine for multi-tenant A multi-tenant SaaS platform architected for precision, scale, and uncompromising security. Transform your industry standards with BMC.' 
                    buttonFisrt={<ButtonFilled text='Explore Use Cases' />}
                    buttonSecond={<ButtonIcon icon={<FontAwesomeIcon icon={faArrowRight} />} text={"View Documentation"} iconEnd/>}
                    />
                <div
                    className="flex justify-center basis-1/2 rounded-2xl"
                    style={{
                        boxShadow: '143px -145px 63px -65px rgb(247, 250, 253), -138px 159px 63px -65px rgb(247, 250, 253),',
                        WebkitBoxShadow: '143px -145px 63px -65px rgb(247, 250, 253), -138px 159px 63px -65px rgb(247, 250, 253),',
                        MozBoxShadow: '143px -145px 63px -65px rgb(247, 250, 253), -138px 159px 63px -65px rgb(247, 250, 253),'
                    }}
                > <Image
                        src={'/solution-hero-shadowed.png'}
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

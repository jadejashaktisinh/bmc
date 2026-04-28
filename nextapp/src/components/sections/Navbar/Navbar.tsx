import ButtonClear from '@/components/ui/ButtonClear/ButtonClear'
import ButtonFilled from '@/components/ui/ButtonFilled/ButtonFilled'
import Link from 'next/link'
import React from 'react'
import NavLink from '../../ui/NavLink/NavLink'

export default function Navbar() {
    return (
        <nav className='py-4 px-8 flex items-center justify-between bg-[rgba(255,255,255,0.8)] shadow-[0px_10px_40px_-10px_rgb(0_11_96_/_8%)] backdrop-blur-[10px]'>
            <div className='flex items-center gap-12'>
                <div className='cursor-pointer'>
                    <p className='text-3xl font-extrabold text-[#1E1B4B] leading-8'><Link href={'/'}>BMC</Link></p>
                </div>
                <div>
                    <ul className='text-2xl flex gap-8  font-normal text-slate-600'>
                        <li><NavLink text='Solutions' path='/solutions' /> </li>
                        <li><NavLink text='Platform' path='/platform' /></li>
                        <li><NavLink text='Enterprise' path='/enterprise' /></li>
                        <li><NavLink text='Pricing' path='/pricing' /></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-8'>
                <ButtonClear text='SignIn' />
                <ButtonFilled text='GetStarted' />
            </div>
        </nav>
    )
}

import NavLink from '@/components/ui/NavLink/NavLink'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='py-10 px-12 bg-[#1E1B4B] mt-24'>
            <div className='flex justify-between items-center'>
                <div className='cursor-pointer'>
                    <p className='text-3xl font-extrabold text-white leading-8'><Link href={'/'}>BMC</Link></p>
                    <p className='mt-2 text-[#454652] leading-6'>© 2024 BMC GLOBAL SYSTEMS. ALL RIGHTS RESERVED.</p>
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
        </div>
    )
}

import Image from 'next/image'
import React from 'react'
import ScaleCard from './components/ScaleCard'

export default function Scale() {
    return (
        <div>
            <div className='px-8 py-32 flex gap-20'>
                <div className='bg-[#000B60] text-[white] p-12 flex flex-col gap-6 rounded-[32px] relative'>
                    <h2 className='text-3xl font-black leading-9 mt-2'>Scale with Confidence</h2>
                    <p className='text-base leading-[26px] text-indigo-100'>Our architecture is designed to grow as you do. With automated tenant isolation and elastic infrastructure, sudden surges in traffic become a competitive advantage, not a risk.</p>
                    <div className='flex gap-6'>
                        <ScaleCard scale='99.99%' tag='UPTIME SLA' />
                        <ScaleCard scale='<20ms' tag='GLOBAL LATENCY' />
                    </div>
                    <div>

                        <Image
                            src={'/scale-icon.png'}
                            alt='Dashboard Analytics'
                            width={200}
                            height={200}
                            className='absolute opacity-20 right-0 top-0'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-[#000B60] leading-7 text-xl font-black'>Infinite Isolation</h4>
                        <p className='text-[#454652]'>Every tenant exists in its own virtualized environment, ensuring data integrity and preventing cross-tenant interference even during peak usage.</p>
                    </div>
                    <div>
                        <h4>Infinite Isolation</h4>
                        <p>Every tenant exists in its own virtualized environment, ensuring data integrity and preventing cross-tenant interference even during peak usage.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

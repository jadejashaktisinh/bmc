import React from 'react'
import Image from 'next/image'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Feature1() {
    return (
        <div className='p-10 bg-[white] rounded-[32px] col-start-1 col-end-9'>
            <div className='flex flex-col gap-4 w-6/12'>
                <FontAwesomeIcon icon={faLayerGroup} className='text-2xl bg-[rgba(0,11,96,0.05)] text-[#000B60] p-2.5 rounded-lg' />
                <h3 className='text-3xl font-black leading-9 mt-2'>Multi-tenant Power</h3>
                <p className='text-base leading-[26px]'>
                    Isolate complex data environments while maintaining a
                    unified core. Our architecture allows for seamless tenant
                    provisioning, custom routing, and independent scaling
                    without shared resource friction.
                </p>
            </div>
            <div className='mt-8'>
                <Image
                    src={'/Data-Clusters.png'}
                    alt='Dashboard Analytics'
                    width={1000}
                    height={1000}
                    className='w-full h-full rounded-2xl'
                />
            </div>
        </div>
    )
}

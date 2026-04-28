import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCartShopping, faGaugeHigh, faHexagonNodes, faLayerGroup, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import SpecificityCard from './components/SpecificityCard'

export default function Specificity() {
    return (
        <div className='bg-[#F1F4F7]'>
            <div className='px-8 py-24 flex flex-col gap-16'>
                <div>
                    <h2 className='text-4xl max-w-lg font-black mb-4'>Engineered for Specificity</h2>
                    <p className='text-[1.4rem] text-[#454652] max-w-[50%]'>We don't believe in one-size-fits-all. BMC provides granular architecture tailored to the unique demands of global sectors.</p>
                </div>
                <div className='grid grid-cols-[repeat(3,1fr)] gap-6'>
                    <SpecificityCard
                        icon={<FontAwesomeIcon icon={faCartShopping} className='text-2xl bg-[#68FADD] text-[#007261] p-2.5 rounded-lg' />}
                        heading='E-commerce'
                        details='Hyper-scale inventory management with sub-millisecond sync across global regions and headless storefront orchestration.'
                        list={['Real-time Stock Sync', 'Multi-currency Ledger', 'AI Personalization Engine']}
                    />
                    <SpecificityCard
                        icon={<FontAwesomeIcon icon={faBuildingColumns} className='text-2xl bg-[#002D6A] text-[#5E95FF] p-2.5 rounded-lg' />}
                        heading='Fintech'
                        details='Tier-1 security compliance for digital banking and payment processing with immutable audit logs and zero-trust protocols.'
                        list={['PCI-DSS Level 1', 'Instant Settlement', 'KYC/AML Integration']}
                    />
                    <SpecificityCard
                        icon={<FontAwesomeIcon icon={faLayerGroup} className='text-2xl bg-[#DFE0FF] text-[#000C62] p-2.5 rounded-lg' />}
                        heading='Media'
                        details='Next-generation content delivery with low-latency streaming, DRM management, and real-time audience analytics.'
                        list={['Edge-based Transcoding', 'Adaptive Bitrate Control', 'Rights Orchestration']}
                    />
                </div>
            </div>
        </div>
    )
}

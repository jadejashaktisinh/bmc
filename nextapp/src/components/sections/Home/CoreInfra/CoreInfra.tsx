import React from 'react'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import SmallFeature from './components/SmallFeature'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faHexagonNodes, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

export default function CoreInfra() {
  return (
    <div className='bg-[#F1F4F7]'>
      <div className='px-8 py-24 flex flex-col gap-16'>
        <div>
          <h2 className='text-4xl max-w-lg font-black mb-4'>Core Infrastructure</h2>
          <p className='text-[1.4rem] text-[#454652] max-w-[50%]'>Propelling your enterprise forward with robust, specialized modules designed for scale and developer autonomy.</p>
        </div>
        <div className='grid grid-cols-[repeat(12,1fr)] gap-6'>
          <Feature1 />
          <Feature2 />
          <SmallFeature icon={<FontAwesomeIcon icon={faGaugeHigh} className='text-xl text-[#000B60]' />} heading='Turbo Speed' text='Edge-cached responses ensuring <100ms latency globally.' />
          <SmallFeature icon={<FontAwesomeIcon icon={faShieldHalved} className='text-xl text-[#000B60]'  />} heading='Secure Core' text='Enterprise-grade SOC2 compliance and end-to-end encryption.' />
          <SmallFeature icon={<FontAwesomeIcon icon={faHexagonNodes} className='text-xl text-[#000B60]' />} heading='Automated Ops' text='One-click deployment pipelines for every tenant environment.' />
        </div>
      </div>
    </div>
  )
}

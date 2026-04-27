import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Feature2() {
    return (
        <div className='p-10 bg-[#000B60] rounded-[32px] col-start-9 col-end-13 text-[white] flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <div className='bg-[rgba(255,255,255,0.1)] p-2.5 rounded-lg  w-fit'>
                    <FontAwesomeIcon icon={faTerminal} className='text-xl p-1 border border-solid border-[white]' />
                </div>
                <h3 className='text-3xl font-black leading-9 mt-2'>Headless WordPress Integration</h3>
                <p className='text-base leading-[26px] text-indigo-100'>
                    Leverage the world's most popular CMS
                    as a robust API backend. Deliver
                    lightning-fast experiences using any
                    frontend framework while keeping your
                    content team in their favorite
                    environment.
                </p>
            </div>
            <div className='mt-8'>
                <p className='text-[#68FADD] text-sm leading-4 bg-[rgba(255,255,255,0.05)] border p-4 border-solid border-[rgba(255,255,255,0.1)]'>GET /api/v2/tenant-1/posts</p>
            </div>
        </div>
    )
}

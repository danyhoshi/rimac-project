'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { lato } from '@/app/ui/fonts'

export default function Sum() {
  
    return ( 
      <section className={`flex flex-col justify-center items-center w-full ${lato.className} mt-10`}>
            <div className='w-[296px]'>
                <h2 className='self-start text-[#494F66] text-[16px]'>Indica la suma asegurada</h2>
                <p className='text-[#676F8F] text-[12px] tracking-wide-'>MIN $12.500  <span className='#D7DBF5 px-1'>|</span>   MAX $16,500 </p>
            </div>
            <div className='flex items-center border border-[rgb(197,203,224)] rounded-[4px] w-[296px] h-[56px] mt-4'>
                <p className='text-[#939dff] text-[20px] flex1 left'>—</p>
                <p className={`text-[16px] text-[#494F66] flex3`}>$ 14,300</p>
                <p className='text-[#939dff] text-[24px] flex1 right'>+</p>
            </div>
      </section>
    )
}
  
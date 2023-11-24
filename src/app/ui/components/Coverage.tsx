'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { lato } from '@/app/ui/fonts'
import { roboto } from '@/app/ui/fonts';

export default function Step() {
  
    return ( 
        <section className='flex flex-col justify-center items-center w-full h-[340px] bg-[#FAFBFF] gap-4'>
            <div className='w-[296px]'>
                <h2 className={`${lato.className} text-[28px] text-[#494F66]`}>Mira las coberturas</h2>
                <p className={`${roboto.className} text-[16px] text-[#676F8F]`}>Conoce las coberturas para tu plan</p>
            </div>
            <div className='pl-6 flex justify-start items-center w-[296px] h-[156px] rounded-lg relative plan bg-white'>
                <Image
                    src="/boy-mobile.svg"
                    width={86}
                    height={158}
                    className="block lg:hidden absolute bottom-0 right-0" 
                    alt="boy"/>
                    <div className='w-[160px] h-[48px]'>
                       <p className={`text-[#A9AFD9] text-[12px] ${roboto.className}`}>Placa: C2U-114</p>
                       <p className={`${lato.className} text-[#494F66] text-[16px]`}>Wolkswagen 2019 Golf</p>
                    </div>
            </div>
        </section>
    )
  }
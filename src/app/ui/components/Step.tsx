'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { lato } from '@/app/ui/fonts'

export default function Step() {
  
    return ( 
      <>
      <div className='flex justify-center gap-2 lg:hidden items-center h-[48px] border-t-[1px] border-[#d7dbf5]'>
            <Image
                src="/leftArrow.svg"
                width={24}
                height={24}
                className="block lg:hidden"
                alt="return"/>
                <p className={`${lato.className} text-[10px] text-bold text-[#676F8F]`}>PASO 2 DE 2</p>
            <Image 
                src="/Bar.svg"
                width={176}
                height={6}
                className="block lg:hidden"
                alt="bar"/>
      </div>
      <div className='lg:flex flex-col gap-16 pl-8 bg-[#FAFBFF] w-[30%] hidden relative'>
        <div className='flex lg:ml-[20%]'>
          <Image
                src="/1datos.svg"
                width={24}
                height={24}
                alt="return"
                className='pt-8'/>
          <p className={`${lato.className} text-[16px] text-bold text-[#A9AFD9] pl-6 pt-8`}>Datos</p>
        </div>
        <Image src="/Progress.svg"
                width={2}
                height={40}
                alt="return"
                className='pt-0 absolute top-10 left-[7.3rem]'
        />
        <div className='flex lg:ml-[20%]'>
            <Image 
                src="/2ArmaTuPlan.svg"
                width={24}
                height={24}
                alt="bar"
                />
            <p className={`${lato.className} text-[16px] text-bold text-[#494F66] pl-6`}>Arma tu plan</p>
        </div>
      </div>
      </>
    )
  }
  
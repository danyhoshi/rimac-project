'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { lato } from '@/app/ui/fonts'

export default function Step() {
  
    return ( 
      <div className='flex justify-center gap-2 items-center h-[48px] border-t-[1px] border-[#d7dbf5]'>
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
    )
  }
  
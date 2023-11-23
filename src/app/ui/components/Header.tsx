'use client';
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts';

export default function Header() {
  return (
      <div className='flex justify-center relative w-full z-10'>
        <header className='fixed md:fixed lg:fixed w-full md:max-w-[90%] lg:max-w-[80%] top-0 flex flex-row justify-between h-14 px-6 items-center bg-[#fafbff] lg:bg-transparent md:bg-transparent'>
          <Image  
            src="/LogoRIMAC.svg"
            width={92}
            height={16}
            className="block"
            alt="logo-Rimac"
          />
          <div className='flex flex-row items-center'>
            <p className={`pr-4 ${roboto.className} text-xs hidden md:block text-[#676f8f]`}>¿Tienes alguna duda?</p>
              <Image src="/ic_phone.svg"
              width={17}
              height={20}
              className="block"
              alt="phone"/>   
              <p className={`pl-1 ${roboto.className} text-xs block md:hidden call`}>Llámanos</p>
              <p className={`pl-1 ${roboto.className} text-xs hidden md:block call`}>(01) 411 6001</p>
            </div>
        </header>
      </div>
      
     
  )
}

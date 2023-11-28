'use client';
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
export default function Header() {
  const pathname = usePathname();
  console.log(pathname)
  return (

      // <div className={clsx('flex justify-center relative w-full z-10 lg:bg-transparent',
      //   {'bg-white': pathname==='/arma-tu-plan',

      //   },
      // )}>
       <div className={clsx(`fixed top-0 flex justify-center z-30 w-full bg-[rgb(250,251,255)] lg:bg-transparent`,
        {
          'bg-white': pathname==='/arma-tu-plan',
          'lg:bg-white': pathname==='/arma-tu-plan',
        }
       )}>  
        {/* <header className='fixed md:fixed lg:fixed w-full lg:max-w-[80%] top-0 flex flex-row justify-between h-14 px-6 items-center bg-[#fafbff]'>  */}
        <header className={clsx('fixed md:fixed lg:fixed w-full top-0 flex flex-row justify-between h-14 px-6 lg:px-[10%] items-center bg-[#fafbff] lg:bg-transparent', 
        {
          'bg-white': pathname==='/arma-tu-plan',
          'lg:bg-white': pathname==='/arma-tu-plan',
        }
        )}>
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

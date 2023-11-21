'use client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts';
//import { lato } from '@/app/ui/fonts'
import {Lato} from 'next/font/google'
const latoBold = Lato({  weight: ['700'],
                        subsets: ['latin'] });
const latoRegular = Lato({  weight: ['400'],
                        subsets: ['latin'] });                        
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
export default function Login() {
  return (
    <div className='bg-[#fff] flex justify-center items-center flex-col w-full h-full'>
         <Image
            src="/mobileGirlCar.svg"
            width={112}
            height={276}
            className="block absolute right-0 mt-[-25px]"
            alt="mobile-girl" />
          <div className={`flex justify-center flex-col w-full mt-10 ${latoRegular.className} h-[270px] bg-[#fafbff]`}>
            <div className='w-4/6 ml-7 max-w-[210px]'>
              <p className='text-[#494F66] text-[10px]'><span className={`${latoBold.className}`}>¡NUEVO!</span></p>
              <h1 className={`text-[#494F66] text-[28px] leading-9 mt-2`}>Seguro Vehicular <span className='text-[#ff1c44]'>Tracking</span></h1>
              <p className={`${roboto.className} text-[#676F8F] text-[14px] mt-4`}>Cuéntanos dónde le harás seguimiento a tu seguro</p>
            </div>
      </div>
      <div className={`${latoRegular.className} text-[#494F66] text-[24px] mt-9`}>
            <h2 className='self-start'>Déjanos tus datos</h2>
            <input type="text" />
        </div>
    </div>
  )
}
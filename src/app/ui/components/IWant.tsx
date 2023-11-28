'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts'
import {Lato} from 'next/font/google'
const latoBold = Lato({  weight: ['700'],
                        subsets: ['latin'] });
const latoRegular = Lato({  weight: ['400'],
                        subsets: ['latin'] }); 

export default function IWant() {
  
    return ( 
      <section className={`flex lg:flex-col justify-between lg:items-start items-center w-full ${latoRegular.className} mt-10 h-[76px] iWant lg:shadow-none lg:w-[33.33%]`}>
            <div className='text-[#494F66] ml-6 lg:border-b-[1px] lg:border-[#D7DBF5]'>
                <p className={`text-[12px] ${latoBold.className} text-[#494F66] hidden lg:block`}>Monto</p>
                <p className={`text-[24px] ${latoRegular.className}`}>$35.00</p>
                <p className={`text-[10px] ${latoBold.className} tracking-wide pb-6 block lg:hidden`}>MENSUAL</p>
                <p className={`text-[10px] ${latoBold.className} tracking-wide pb-6 hidden lg:block`}>mensual</p>
            </div>
            <div className={`hidden lg:block mt-4`}>
              <p className={`text-[14px] text-[#494F66] ${roboto.className}`}>El precio incluye: </p>
              <p className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Llanta de repuesto</p>
              <p className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Análisis de motor</p>
              <p className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Aros gratis</p>
            </div>
            <button className="bg-[#FF1C44] h-[44px] text-white py-2 px-4 text-[14px] mr-6 w-[168px] lg:w-[192px] font-bold rounded-md lg:mt-8">
              lo quiero
            </button>
      </section>
    )
}
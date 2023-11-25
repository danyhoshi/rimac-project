'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import {Lato} from 'next/font/google'
const latoBold = Lato({  weight: ['700'],
                        subsets: ['latin'] });
const latoRegular = Lato({  weight: ['400'],
                        subsets: ['latin'] }); 

export default function IWant() {
  
    return ( 
      <section className={`flex justify-between items-center w-full ${latoRegular.className} mt-10`}>
            <div className='text-[#494F66] ml-6'>
                <p className='text-[24px]'>$35.00</p>
                <p className={`text-[10px] ${latoBold.className} tracking-wide`}>MENSUAL</p>
            </div>
            <button className="bg-[#FF1C44] h-[44px] text-white py-2 px-4 text-[14px] mr-6 w-[168px] lg:w-[192px] font-bold rounded-md">
              lo quiero
            </button>
      </section>
    )
}
'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts'
import { lato } from '@/app/ui/fonts'
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks"
import { RootState } from "../../../Redux/store";
export default function IWant() {
  const cobertura = useAppSelector((state: RootState) => state.cobertura);
  const dispatch = useAppDispatch();
    return ( 
      <section className={`flex flex-row justify-between items-center lg:flex-col  lg:items-start w-full mt-10 h-[76px] iWant lg:shadow-none lg:w-[33.33%] lg:pl-7 lg:pt-[100px]`}>
            <div className='text-[#494F66] ml-6 lg:border-b-[1px] lg:border-[rgb(215,219,245)] lg:w-[224px]'>
                <p className={`text-[12px] font-bold ${lato.className} text-[#494F66] hidden lg:block tracking-[0.6px]`}>Monto</p>
                <p className={`${lato.className} font-normal text-[24px] text-[#494F66]`}>${cobertura.montoMensual.toFixed(2)}</p>
                <p className={`text-[10px] ${lato.className} font-bold tracking-wide block lg:hidden`}>MENSUAL</p>
                <p className={`text-[10px] ${roboto.className} text-[#676F8F] tracking-wide pb-6 hidden lg:block`}>mensual</p>
            </div>
            <div className={`hidden lg:block mt-4 lg:ml-6`}>
              <p className={`text-[14px] text-[#494F66] ${roboto.className}`}>El precio incluye: </p>
              <ul className='precio'>
                <li className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Llanta de repuesto</li>
                <li className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Análisis de motor</li>
                <li className={`text-[14px] text-[#676F8F] ${roboto.className}`}>Aros gratis</li>
              </ul>
            </div>
            <button className="bg-[#FF1C44] h-[44px] text-white py-2 px-4 text-[14px] mr-6 lg:ml-6 w-[168px] lg:w-[192px] font-bold rounded-md lg:mt-8">
              lo quiero
            </button>
      </section>
    )
}
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
                       
 export const metadata: Metadata = {
                     title: 'Login',
                        };
export default function Login() {
  return (
    <div className='bg-[#fff] flex justify-center items-center flex-col w-full h-full'>
          <Image
            src="/mobileGirlCar.svg"
            width={112}
            height={276}
            className="block absolute right-0 top-[58px] "
            alt="mobile-girl" />
          <div className={`flex justify-center flex-col w-full mt-10 ${latoRegular.className} h-[270px] bg-[#fafbff]`}>
            <div className='w-4/6 ml-7 max-w-[210px]'>
              <p className='text-[#494F66] text-[10px]'><span className={`${latoBold.className}`}>¡NUEVO!</span></p>
              <h1 className={`text-[#494F66] text-[28px] leading-9 mt-2`}>Seguro Vehicular <span className='text-[#ff1c44]'>Tracking</span></h1>
              <p className={`${roboto.className} text-[#676F8F] text-[14px] mt-4`}>Cuéntanos dónde le harás seguimiento a tu seguro</p>
            </div>
        </div>
       <div className={`${latoRegular.className} text-[#494F66] text-[24px] mt-9`}>
            
            <form className="space-y-3 w-[296px]">
            <h2 className='self-start'>Déjanos tus datos</h2>
              <div className="flex-1 w-full">    
                  <div className="relative">
                    <div className='w-[296px] flex flex-row justify-start items-center rounded-sm border border-[#C5CBE0]'>
                      
                      <select name="dni" id="dni" className='w-[28%] h-[56px] text-[#494F66] text-[16px] pl-[10px]  border-[#C5CBE0] border-r-[1px]'>
                        <option className='text-[#494F66]' value="">DNI</option>
                      </select>
                      
                      <input
                        className="peer block w-[75%] h-[56px] pl-3 text-[16px] outline-2 placeholder:text-[#A9AFD9]}"
                        id="id"
                        type="text"
                        name="id"
                        placeholder="Nro. de Doc"
                        required
                      />
                    </div>
                  </div>
                    <div className="relative mt-4">
                      <input
                        className="peer block w-[296px] rounded-sm border h-[56px] border-[#C5CBE0] pl-3 text-[16px] outline-2 text-[#A9AFD9]"
                        id="celular"       
                        type="text"
                        name="celular"
                        placeholder="Celular"
                        required
                        minLength={6}
                      />
                  </div>
              
                  <div className="relative mt-4">
                      <input
                        className="peer block w-[296px] h-[56px] rounded-sm border border-[#C5CBE0] pl-3 text-[16px] outline-2 text-[#A9AFD9]"
                        id="placa"
                        type="text"
                        name="placa"
                        placeholder="Placa"
                        required
                        minLength={6}
                      /> 
                    </div>
                
                <div className="flex items-center mt-4">
                    <input id="green-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#389E0D] text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-[12px] text-[#676F8F]">Acepto la Política de <span className='font-bold text-[#676F8F] underline'>Protección de Datos Personales</span> y los <span className='font-bold text-[#676F8F] underline'>Términos y Condiciones</span>.</label>
                </div>
            <button className="bg-[#FF1C44] h-[56px] text-white py-2 px-4 text-[14px] w-full mt-8 font-bold rounded-md">
              COTÍZALO
            </button>
             
              </div> 
    </form>
        </div>  
    </div>
  )
}
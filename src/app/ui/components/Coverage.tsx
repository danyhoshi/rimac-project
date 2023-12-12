'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { lato } from '@/app/ui/fonts'
import { roboto } from '@/app/ui/fonts';
import Link from 'next/link';
import React from 'react'
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks"
import { RootState } from "../../../Redux/store";
import { cobertura, setState } from '@/Redux/features/coberturaSlice';

export default function Step() {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        if(localStorage?.getItem('state')){
           const data: cobertura = JSON.parse(localStorage?.getItem('state') || '');
           dispatch(setState(data))
        }
    }, [])
    const cobertura = useAppSelector((state: RootState) => state.cobertura);
    return ( 
        <section className='flex flex-col justify-center items-center w-full h-[340px] bg-[#FAFBFF] lg:bg-white gap-4'>
            <div className='w-[296px] lg:w-[384px]'>
            <div className='lg:flex hidden items-center pl-4 mt-3'>
            <Link href={'/'}><Image 
                    src={'/iconBack.svg'}
                        width={24}
                        height={24}
                        className="block"
                        alt={'icon-back' } /></Link>
                <Link href={'/'}><p className={`text-[10px] text-[#A9AFD9] tracking-[0.8px] pl-4 ${lato.className}`}>VOLVER</p></Link>
            </div>
                <h2 className={`${lato.className} text-[28px] text-[#494F66] lg:hidden`}>Mira las coberturas</h2>
                <h2 className={`${lato.className} text-[40px] text-[#494F66] hidden lg:block mt-3`}>¡Hola, <span className='text-[#2196F3]'>{ cobertura?.nameUser }!</span></h2>
                <p className={`${roboto.className} text-[16px] text-[#676F8F]`}>Conoce las coberturas para tu plan</p>
            </div>
            <div className='pl-6 flex justify-start items-center w-[296px] h-[156px] rounded-lg relative plan lg:shadow-none lg:border-[#EDEFFC] lg:border-[3px]  bg-white lg:w-[384px]'>
                <Image
                    src="/boy-mobile.webp"
                    width={86}
                    height={158}
                    className="absolute bottom-0 right-0" 
                    alt="boy"/>
                    <div className='w-[160px] h-[48px]'>
                        
                       <p className={`text-[#A9AFD9] text-[12px] ${roboto.className}`}>Placa: { cobertura.placa }</p>
                       <p className={`${lato.className} text-[#494F66] text-[16px]`}>{ cobertura.marcaAuto } { cobertura.anioAuto } <br /> { cobertura.modeloAuto }</p>
                    </div>
            </div>
        </section>
    )
  }
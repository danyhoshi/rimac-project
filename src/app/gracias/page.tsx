'use client'
import Image from 'next/image'
import { lato } from '@/app/ui/fonts';
import { roboto } from '@/app/ui/fonts'
import { useAppSelector, useAppDispatch } from '../../Redux/hooks'
import React from 'react'
import { RootState } from "../../Redux/store";
import { setState, cobertura } from '@/Redux/features/coberturaSlice';


export default function pageGracias() {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        if(localStorage?.getItem('state')){
           const data : cobertura = JSON.parse(localStorage?.getItem('state') || '');
           dispatch(setState(data))
           
          
        }

       // console.log(localStorage?.getItem('state') ? JSON.parse(localStorage?.getItem('state') || '') : {})

    }, [])
    const cobertura = useAppSelector((state: RootState) => state.cobertura);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    return (
    <section className='flex flex-col items-center lg:flex-row md:items-start w-full h-screen box-border relative pt-[56px]'>
        <Image 
            src={'/Ilustration-gracias-mobile.svg'}
            width={360}
            height={208}
            alt={'gracias-image'}
            className="block w-full lg:hidden"
        />
        <div className='w-[40%] h-full hidden lg:block bg-[#FAFBFF] relative'>
            <Image 
                src={'/GraciasDesktop.svg'}
                width={ 416 }
                height={ 448 }
                alt={'gracias-image'}
                className="hidden w-full lg:block absolute right-0 top-[15%] -mr-[90px]"
            />
        </div>
        <div className='flex flex-col items-center justify-start pt-10 md:pt-[8%] w-full'>
            <div className={`w-[320px] md:w-[480px] text-[28px] md:text-[36px] ${lato.className}`}>
                <h2 className='text-[#2196F3]'>¡Te damos la bienvenida!</h2>
                <p className='text-[#494F66]'>Cuenta con nosotros para proteger tu vehículo</p>
            </div>
            <div className={`w-[320px] md:w-[480px] text-[#676F8F] text-[16px] pt-6 font-light ${roboto.className}`}>
                <p>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: <br />
                <span className={`${roboto.className}`}>{cobertura?.email}</span></p>
                <p className={`text-[#494F66] ${roboto.className}`}>MONTO: ${ cobertura?.montoMensual }</p>
                <button className="bg-[#2196F3] h-[56px] text-white py-2 px-4 mt-14 text-[14px] w-[320px] md-[256px] rounded-md">
                    CÓMO USAR MI SEGURO
                </button>
            </div>
        </div>
        <footer className={`flex flex-col justify-center md:hidden items-start pl-8 font-light ${roboto.className} text-[12px] absolute bottom-0 iWant w-full h-[76px] text-[#A9AFD9] hidden-footer`}>
            © 2023 MobileSecure Seguros y Reaseguros
        </footer>
    </section>
  )
}
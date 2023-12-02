'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import { lato } from '@/app/ui/fonts'
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks"
import { RootState } from "../../../Redux/store";
import { changeMontoCobertura } from '@/Redux/features/coberturaSlice';

export default function Sum() {
    const dispatch = useAppDispatch();
    const cobertura = useAppSelector((state: RootState) => state.cobertura);
    const handlerPlus = () => {
        dispatch(changeMontoCobertura(cobertura.montoCobertura + 100))
    }
    const handlerMinus = () => {
        dispatch(changeMontoCobertura(cobertura.montoCobertura - 100))
    }
    return ( 
      <section className={`flex flex-col lg:flex-row lg:gap-6 justify-center items-center w-full ${lato.className} mt-10`}>
            <div className='w-[296px] lg:w-[180px]'>
                <h2 className='self-start text-[#494F66] text-[16px]'>Indica la suma asegurada</h2>
                <p className='text-[#676F8F] text-[12px] tracking-wide'>MIN $12.500  <span className='#D7DBF5 px-1'>|</span>   MAX $16,500 </p>
            </div>
            <div className='flex items-center border border-[rgb(197,203,224)] rounded-[4px] w-[296px] lg:w-[160px] h-[56px] mt-4'>
                <button className='text-[#939dff] text-[20px] flex1 left cursor-pointer' onClick={ handlerMinus }>—</button>
                    <p className={`text-[16px] text-[#494F66] flex3`}>$ {cobertura.montoCobertura.toLocaleString('es-MX')}</p>
                <button className='text-[#939dff] text-[24px] flex1 right cursor-pointer' onClick={ handlerPlus }>+</button>
            </div>
      </section>
    )
}
  
'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import React from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks"
import { RootState } from "../../../Redux/store";
import { changeAtropello, changeChoqueRoja, changeLlantaRobada } from '@/Redux/features/coberturaSlice';
interface Props {
    title: string,
}
const Switch: React.FC<Props> = ({title}) =>{
    const cobertura = useAppSelector((state: RootState) => state.cobertura);
    const dispatch = useAppDispatch();
    const [on, setOn] = React.useState(false)
    React.useEffect(() => {
        switch(title) {
            case 'Llanta robada':
                setOn(cobertura.llantaRobada)
                break;
            case 'Choque y/o pasarte la luz roja':
                setOn(cobertura.choqueRoja)
                break;
            case 'Atropello en la vía Evitamiento':
                setOn(cobertura.atropello)
                break;
        }
     }, [cobertura.llantaRobada, cobertura.choqueRoja, cobertura.atropello])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       const { checked } = e.target
        
        if(title === 'Choque y/o pasarte la luz roja'){
            if(cobertura.choqueRoja) {
                dispatch(changeChoqueRoja(false))
            } else {
                dispatch(changeChoqueRoja(true))
            }
             setOn(cobertura.choqueRoja)
        }
        else if(title === 'Llanta robada'){
            if(cobertura.llantaRobada) {
                dispatch(changeLlantaRobada(false))
            } else {
                dispatch(changeLlantaRobada(true))
            }
            setOn(cobertura.llantaRobada)
        }  else if(title === 'Atropello en la vía Evitamiento'){
            if(cobertura.atropello) {
                dispatch(changeAtropello(false))
            }else {
                dispatch(changeAtropello(true))   
            }
            setOn(cobertura.atropello)
        }
    }
    return (
    
         <label className={clsx(`cursor-pointer relative w-[51px] h-[31px] rounded-full lg:hidden`, 
                {
                    'bg-[#7CC954] transition-bg duration-500': on,
                    'bg-[#E3E9F7] transition-bg duration-500': !on,
                    'hidden': cobertura.montoCobertura > 16000 && title === 'Choque y/o pasarte la luz roja'

                })}>
                    <input type="checkbox" className="sr-only peer" checked = { on } onChange={handleChange}/>
                    <span className='w-[55%] h-[88%] bg-white absolute rounded-full left-[0.15rem] top-[0.15rem] peer-checked:bg-white peer-checked:left-[21px] transition-all duration-500'></span>
        </label> 
   
    )
}
export default Switch;
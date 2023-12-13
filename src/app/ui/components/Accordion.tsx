'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts'
import { lato } from '@/app/ui/fonts'
import React from 'react'
import clsx from 'clsx';
import Switch from './Switch';
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks"
import { RootState } from "../../../Redux/store";
import { changeAtropello, changeChoqueRoja, changeLlantaRobada } from '@/Redux/features/coberturaSlice';

interface Props {
    title: string,
    description: string,
    src: string, 
}
const Accordion: React.FC<Props> = ({title, description, src}) =>
{
    const cobertura = useAppSelector((state: RootState) => state.cobertura);
    const dispatch = useAppDispatch();
    const [show, setShow] = React.useState(false)
    
    const [add, setAdd] = React.useState(false)
    React.useEffect(() => {
        switch(title) {
            case 'Llanta robada':
                setAdd(cobertura.llantaRobada)
                break;
            case 'Choque y/o pasarte la luz roja':
                setAdd(cobertura.choqueRoja)
                break;
            case 'Atropello en la vía Evitamiento':
                setAdd(cobertura.atropello)
                break;
        }
     }, [cobertura.llantaRobada, cobertura.choqueRoja, cobertura.atropello])
    
    const handleClick = () => {
        setShow(prevState => !prevState)
    }

    const handleClickAdd = () => {
        if(title === 'Choque y/o pasarte la luz roja'){
            if(cobertura.choqueRoja) {
                dispatch(changeChoqueRoja(false))
            } else {
                dispatch(changeChoqueRoja(true))
            }
        }
        else if(title === 'Llanta robada'){
            if(cobertura.llantaRobada) {
                dispatch(changeLlantaRobada(false))
            } else {
                dispatch(changeLlantaRobada(true))
            }
        }  else if(title === 'Atropello en la vía Evitamiento'){
            if(cobertura.atropello) {
                dispatch(changeAtropello(false))
            }else {
                dispatch(changeAtropello(true))   
            }
        }
    }
 
    return ( 
    <div className={"flex flex-col justify-center items-center w-full border-b-[1px] border-[#D7DBF5] pb-8 lg:w-[382px]"}>
      <div className={`flex flex-col justify-center items-center w-[80%] font-normal ${lato.className} mt-10`}>
           <div className='flex justify-start items-center w-full'>
                <Image   
                    src={src}
                    width={40}
                    height={40}
                    className="block self-start"
                    alt="img-llanta-robada"/>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between pl-4 w-[100%] max-w-lg'>
                        <h3 className='text-[#494F66] w-[150px]'>{title}</h3>
                        <Switch 
                            title={title}/>
                        <Image  src={ show ? '/blue_arrow_up.svg' : '/blue_arrow_down.svg' }
                            width={20}
                            height={20}
                            className="lg:block hidden self-start"
                            onClick={ handleClick }
                            alt="img-llanta-robada"/>
                    </div>
                    <div className='flex flex-col'>
                            
                        <div className={clsx(`lg:flex hidden items-center pl-4 mt-3`,
                        { 
                            'lg:hidden': cobertura.montoCobertura > 16000 && title ==='Choque y/o pasarte la luz roja'
                        }
                        )}>
                            <Image 
                                src={ !add ? '/gl_add.svg' : '/gl_quit.svg'}   
                                    width={24}
                                    height={24}
                                    className="block cursor-pointer"
                                    onClick={ handleClickAdd }
                                    alt={!add ? 'add' : 'quit' } />
                                    <button className={`text-[10px] text-[#A9AFD9] tracking-[0.8px] pl-4 font-bold ${lato.className}`} onClick={ handleClickAdd }>{!add ? 'AGREGAR' : 'QUITAR'}</button>                                                                    
                            </div>
                        

                        <p className={clsx(`pl-4 pt-3 ${roboto.className} text-[14px] text-[#676F8F]`,
                            {
                                'block': show,
                                'hidden': !show

                            }
                            )}>{description}</p>
                    </div>
                    <div className='flex items-center pl-4 mt-3 lg:hidden'>
                        <p className={`text-[10px] text-[#A9AFD9] tracking-[0.8px] font-bold ${lato.className}`}>{show ? 'VER MENOS' : 'VER MÁS'}</p>
                        <Image 
                            src={show ? '/gl_arrow_up.svg' : '/gl_arrow_down.svg'}
                            width={16}
                            height={16}
                            className="block ml-2"
                            onClick={ handleClick }
                            alt="ver-mas"/>
                    </div>
                </div>
            </div>
      </div>
    </div>
    )
}
export default Accordion;
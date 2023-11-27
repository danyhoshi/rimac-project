'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts'
import {Lato} from 'next/font/google'
import React from 'react'
import clsx from 'clsx';
import Switch from './Switch';
const latoBold = Lato({  weight: ['700'],
                        subsets: ['latin'] });
const latoRegular = Lato({  weight: ['400'],
                        subsets: ['latin'] }); 

interface Props {
    title: string,
    description: string,
    src: string
}
const Accordion: React.FC<Props> = ({title, description, src}) =>
{
    const [show, setShow] = React.useState(false)
    const handleClick = () => {
        setShow(prevState => !prevState)
        console.log('click')
    }
    return ( 
    <div className={"flex flex-col justify-center items-center w-full"}>
      <div className={`flex flex-col justify-center items-center w-[80%] ${latoRegular.className} mt-10`}>
           <div className='flex justify-start items-center w-full'>
                <Image   
                    src={src}
                    width={40}
                    height={40}
                    className="block self-start"
                    alt="img-llanta-robada"/>
                <div className='flex flex-col'>
                    <div className='flex justify-between pl-4 w-[244px]'>
                        <h3 className='text-[#494F66]'>{title}</h3>
                        {/* <Image   
                            src={'/On.png'}
                            width={40}
                            height={40}
                            className="block self-end"
                            alt="switch"/> */}
                        <Switch />
                    </div>
                    <p className={clsx(`pl-4 pt-3 ${roboto.className} text-[14px] text-[#676F8F] w-[244px]`,
                        {
                            'block': show,
                            'hidden': !show

                        }
                        )}>{description}</p>
                    <div className='flex items-center pl-4 mt-3'>
                        <p className={`text-[10px] text-[#A9AFD9] tracking-[0.8px] ${latoBold.className}`}>{show ? 'VER MENOS' : 'VER MÁS'}</p>
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
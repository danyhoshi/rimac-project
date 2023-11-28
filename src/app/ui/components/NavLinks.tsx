'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'
import {Lato} from 'next/font/google'
const latoBold = Lato({  weight: ['700'],
                        subsets: ['latin'] });
const latoRegular = Lato({  weight: ['400'],
                        subsets: ['latin'] });   


const links = [
    {
        name: 'PROTEJE A TU AUTO',
        href: '/arma-tu-plan'
    },
    {
        name: 'PROTEJE A LOS QUE TE RODEAN',
        href: '/arma-tu-plan/proteje-a-los-que-te-rodean'
    },
    {
        name: 'MEJORA TU PLAN',
        href: '/arma-tu-plan/mejora-tu-plan'
    },
]
export default function NavLink() {
    const pathname = usePathname();
    const [select, setSelect] = React.useState([true, false, false])
    const handleClick = (ii: number) => {
        setSelect( prevState => {
            return prevState.map((pos, index) => {
                if(index === ii)
                    pos = true
                else 
                    pos = false
                return pos   
            }
            )
    
        })
    }
    return ( 
      <section className={`flex flex-col items-center justify-center ${latoRegular.className} mt-10 text-[#494F66] lg:w-[382px]`}>
            <h2 className='text-[20px] w-[296px]'>Agrega o quita coberturas</h2>
            <ul className={`flex justify-evenly w-full mt-10 text-[10px] ${latoBold.className}`}>
                {links.map((pag, index) => {
                    return (
                        <Link key={ pag.href } href={pag.href} onClick= {() => handleClick(index) } 
                        className={clsx('text-[#494F66] w-[33.33%] text-center leading-5 tracking-[0.8px] h-[63px]',
                        {
                            'px-8': index===0,
                            'px-4': index===1,
                            'px-9': index===2,
                            'border-[#FF1C44] border-b-[2px] text-[#FF1C44]': select[index],
                            'border-[#D7DBF5] border-b-[1px] text-[#494F66]': !select[index]

                        }
                        )
                        }><li>{pag.name}</li></Link>
                    )
                })
                }
                
            </ul>
      </section>
    )
}
  
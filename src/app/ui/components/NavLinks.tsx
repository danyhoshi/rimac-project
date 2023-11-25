'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
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
  
    return ( 
      <section className={`flex flex-col items-center justify-center ${latoRegular.className} mt-10 text-[#494F66]`}>
            <h2 className='text-[20px] w-[296px]'>Agrega o quita coberturas</h2>
            <ul className={`flex justify-evenly w-full mt-10 text-[10px] ${latoBold.className}`}>
                {links.map((pag, index) => {

                    return (
                        <li className={clsx('border-b-[1px] border-[#D7DBF5] w-[33.33%] text-center leading-5 tracking-[0.8px] h-[63px]',
                        {
                            'px-8': index===0,
                            'px-4': index===1,
                            'px-9': index===2,
                            
                        }
                        )}><Link href={pag.href}>{pag.name}</Link></li>
                    )
                })
                }
                
            </ul>
      </section>
    )
}
  
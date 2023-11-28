'use client'; //This is a Client Component, which means you can use event listeners and hooks.
import React from 'react';
import clsx from 'clsx';
export default function Switch() {
    const [on, setOn] = React.useState(false)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       const { checked } = e.target
        setOn(prevState => !prevState)
        console.log('click', checked)
    }
    return (
        
        <label className={clsx(`cursor-pointer relative w-[51px] h-[31px] rounded-full lg:hidden`, 
        {
            'bg-[#7CC954] transition-bg duration-500': on,
            'bg-[#E3E9F7] transition-bg duration-500': !on

        })}>
            <input type="checkbox" className="sr-only peer" onChange={handleChange}/>
            <span className='w-[55%] h-[88%] bg-white absolute rounded-full left-[0.15rem] top-[0.15rem] peer-checked:bg-white peer-checked:left-[21px] transition-all duration-500'></span>
        </label> 
     
    )
}
'use client';
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/ui/components/Header'
import StoreProvider from './StoreProvider';
import React from 'react'


// export const metadata: Metadata = {
//   title: {
//     template: '%s | Rimac',
//     default: 'Rimac',
//   },
//   description: 'Seguro Vehicular Tracking.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className='relative'>  
    <StoreProvider>
      <body>
          <Header /> 
          {children}
      </body>
    </StoreProvider>
    </html>
  )
}

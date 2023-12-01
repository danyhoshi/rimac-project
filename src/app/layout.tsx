import type { Metadata } from 'next'
'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts';
import Header from '@/app/ui/components/Header'
import Providers from './Redux/Provider';
import StoreProvider from './StoreProvider';
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Rimac',
//     default: 'Rimac',
//   },
//   description: 'Seguro Vehicular Tracking.',
// };
// export const metadata: Metadata = {
//   title: 'Rimac',
//   description: 'Seguro Vehicular Tracking',
// }

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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { roboto } from '@/app/ui/fonts';
import Header from '@/app/ui/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Rimac',
    default: 'Rimac',
  },
  description: 'Seguro Vehicular Tracking.',
};
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
      <body className={`${inter.className} relative`}>
          <Header /> 
          {children}
      </body>
    </html>
  )
}

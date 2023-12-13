import Login from '@/app/ui/components/Login'
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'MobileSecure',
  description: 'Seguro Vehicular Tracking',
  icons: {
    icon: [
      {
        url: './favicon.ico',
        href: './favicon.ico',
      }
    ]
  }
}
export default function Home() {

  return (
    <main>
      <Login />
    </main>
  )
}


import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'MobileSecure',
  description: 'Seguro Vehicular Tracking',
  icons: {
    icon: [
      {
     //   media: '(prefers-color-scheme: light)',
        url: '../../../favicon.ico',
        href: '../../../favicon.ico',
      }
    ]
  }
}
export default function ThanksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {children}
        </>
    )
  }
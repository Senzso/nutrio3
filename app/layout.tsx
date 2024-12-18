import { Roboto, Fraunces } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto',
})

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata = {
  title: 'Nutrio',
  description: 'Prirodni proizvodi za vaše zdravlje',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  )
}


import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const locales = ['es', 'pt']

export default function RootLayout({ children, params: {locale} }) {
  console.log(locale);
  !locales.includes(locale) && notFound()

  return (
    <html lang={locale}>
      
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { frFR } from '@clerk/localizations'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Proud Us Drip',
  description:
    'Le streetwear qui fait du bien. Des vêtements conçus sur mesure rien que pour vous.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider dynamic localization={frFR}>
      <html lang='fr'>
        <body className={`${montserrat.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}

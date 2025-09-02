import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Proud Us Drip',
  description:
    'Le streetwear qui fait du bien. Des vêtements conçus sur mesure rien que pour vous.',
}

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  )
}

export default Rootlayout

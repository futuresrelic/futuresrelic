import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Future's Relic | An NFT Filmmaking Experience",
  description: 'An NFT Filmmaking Experience on WAX Blockchain. Help us restore abandoned film footage and earn rewards!',
  keywords: ['NFT', 'WAX Blockchain', 'Filmmaking', 'Future\'s Relic', 'Editing', 'Crypto'],
  authors: [{ name: 'Future\'s Relic' }],
  openGraph: {
    title: "Future's Relic",
    description: 'An NFT Filmmaking Experience',
    url: 'https://www.futuresrelic.com',
    siteName: "Future's Relic",
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

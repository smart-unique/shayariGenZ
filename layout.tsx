import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Background3D from './components/Background3D'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shayari World',
  description: 'A modern shayari website with 3D effects',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background3D />
        <main className="relative z-10 pb-16">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  )
}



import './globals.css'
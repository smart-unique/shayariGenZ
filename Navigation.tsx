'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid, Settings } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 z-50">
      <ul className="flex justify-around">
        <li>
          <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'text-blue-400' : ''}`}>
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/categories" className={`flex flex-col items-center ${pathname === '/categories' ? 'text-blue-400' : ''}`}>
            <Grid size={20} />
            <span className="text-xs mt-1">Categories</span>
          </Link>
        </li>
        <li>
          <Link href="/settings" className={`flex flex-col items-center ${pathname === '/settings' ? 'text-blue-400' : ''}`}>
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


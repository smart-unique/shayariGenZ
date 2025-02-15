'use client'

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 to-gray-700" />
    )
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}


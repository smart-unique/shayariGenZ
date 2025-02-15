'use client'

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface ShayariCardProps {
  shayari: {
    id: number
    text: string
    language: string
  }
}

export default memo(function ShayariCard({ shayari }: ShayariCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shayari.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-lg mb-4 font-hindi whitespace-pre-line">
        {shayari.text}
      </p>
      <button
        onClick={copyToClipboard}
        className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute bottom-14 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm"
        >
          Shayari Copied
        </motion.div>
      )}
    </motion.div>
  )
})


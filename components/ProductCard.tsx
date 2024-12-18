'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: string
    title: string
    description: string
    code: string
    image: string
    details: {
      description: string
      price: string
      quantity?: string
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <Image 
          src={product.image} 
          alt={product.title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-4 relative z-10">
        <h3 className="text-xl font-bold text-orange-500 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-orange-500 font-bold mb-4">{product.code}</p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
        >
          {isExpanded ? 'Sakrij detalje' : 'Pogledaj Više'}
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="absolute inset-0 bg-white z-20 p-4 overflow-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{product.title}</h3>
            <div className="space-y-6 text-gray-700">
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-600 mb-2">Opis proizvoda</h4>
                <p className="italic">{product.details.description}</p>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold text-gray-600">Cijena</h4>
                  <p className="text-2xl font-bold text-orange-500">{product.details.price}</p>
                </div>
                {product.details.quantity && (
                  <div className="text-right">
                    <h4 className="text-lg font-semibold text-gray-600">Količina</h4>
                    <p className="text-xl text-gray-700">{product.details.quantity}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6">
              <Image 
                src={product.image} 
                alt={product.title} 
                width={300} 
                height={200} 
                className="rounded-lg shadow-md mx-auto object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


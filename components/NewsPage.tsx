'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from 'lucide-react'

export default function NewsPage() {
  const router = useRouter()
  const goToHomePage = () => {
    router.push('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-[#F7F6F2]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center orange-text">Novosti</h1>
        
        {/* New Product Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="overflow-hidden bg-white">
            <div className="relative">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEW%20PRODUCT.jpg-wtzdPUGgYZu9Afx393BGcaDxi4ydfd.jpeg"
                alt="Novi proizvod - Muffini"
                width={1200}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles className="w-6 h-6 text-orange-500" />
                </motion.div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                  Novo u ponudi
                </span>
                <span className="text-gray-500 text-sm">
                  Prosinac 2024
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Predstavljamo nove Nutrio muffine!
              </h2>
              <p className="text-gray-600 mb-6">
                S ponosom vam predstavljamo najnoviji dodatak našoj ponudi - muffine s komadićima čokolade! 
                Izrađeni od najfinijih sastojaka, uključujući naše poznate lješnjake, ovi muffini 
                predstavljaju savršenu kombinaciju tradicionalne recepture i moderne slastice. 
                Svaki muffin je ručno pripremljen s posebnom pažnjom, osiguravajući konzistentnu 
                kvalitetu i neodoljiv okus.
              </p>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Izrađeno od prirodnih sastojaka
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Bogati komadićima čokolade
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Savršeni za užinu ili desert
                </p>
              </div>
              <div className="mt-6">
                <p className="text-gray-500 italic">
                  Uskoro u prodaji! Pratite nas za više informacija o datumu lansiranja.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <Button
          onClick={goToHomePage}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
        >
          Natrag na početnu
        </Button>
      </div>
    </div>
  )
}


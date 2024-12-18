'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ExpandableMenu from './ExpandableMenu'
import Introduction from './Introduction'
import ProductCatalog from './ProductCatalog'

export default function HomePage() {
const [isScrolled, setIsScrolled] = useState(false)
const [isMounted, setIsMounted] = useState(false)
const introRef = useRef(null)
const catalogRef = useRef(null)
const introInView = useInView(introRef, { once: true, amount: 0.3 })

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  // Set initial scroll state
  handleScroll()

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
  setIsMounted(true)
}, [])

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

useEffect(() => {
  const handleHashChange = () => {
    if (window.location.hash === '#catalog') {
      scrollToSection('catalog')
    }
  }

  window.addEventListener('hashchange', handleHashChange)
  return () => window.removeEventListener('hashchange', handleHashChange)
}, [])

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

return (
  <div className="min-h-screen">
    <ExpandableMenu />
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="/videos/nature-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-100 opacity-70"></div>
      </div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center space-x-4"
        >
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300 rounded-full p-2 shadow-md"
            asChild
          >
            <Link href="https://www.facebook.com/people/Vje%C5%BEbeni%C4%8Dka-Tvrtka-Nutrio/61560509477768/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-gray-800" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300 rounded-full p-2 shadow-md"
            asChild
          >
            <Link href="https://www.instagram.com/vtnutrio_/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-gray-800" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20tvrtke-9pYlVAU2Vu0BY1OmCW4KswxyMCZQ8l.png"
            alt="Nutrio d.o.o."
            width={400}
            height={200}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl text-gray-800"
        >
          Gdje se kvalitetni prirodni sastojci susreću s ljubavlju prema zdravlju. Naši proizvodi od kamilice, šipka i lješnjaka osmišljeni su za vašu dobrobit. Istražite našu ponudu i uživajte u blagodatima prirode!
        </motion.p>
        <motion.button
          className="btn-primary text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('introduction')}
        >
          Kreni
        </motion.button>
      </div>
      <AnimatePresence>
        {isMounted && !isScrolled && (
          <motion.div
            className="scroll-down"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    {/* Divider */}
    <div className="w-full h-32 bg-gradient-to-b from-transparent to-[#F7F6F2]"></div>

    <motion.div
      ref={introRef}
      initial="hidden"
      animate={introInView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
    >
      <Introduction />
    </motion.div>

    {/* Divider */}
    <div className="w-full h-32 bg-gradient-to-b from-[#F7F6F2] via-transparent to-[#F7F6F2]"></div>

    <motion.div
      ref={catalogRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ProductCatalog />
    </motion.div>
  </div>
)
}




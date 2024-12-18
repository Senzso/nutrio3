import { motion } from 'framer-motion'
import { Leaf, Users, Heart, ShoppingBag, Award, Truck } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Introduction() {
  return (
    <section id="introduction" className="py-32 px-4 bg-[#F7F6F2] relative overflow-hidden">
      {/* Pozadinski elementi */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center text-orange-600 font-fraunces"
          variants={fadeInUpVariants}
        >
          Dobrodošli u Nutrio
        </motion.h2>
        <motion.div
          className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 mb-12"
          variants={fadeInUpVariants}
        >
          <p className="text-xl text-center mb-8">
            Nutrio je više od trgovine - mi smo vaš partner u zdravom životu. Naša strast prema prirodnim proizvodima i predanost kvaliteti čine nas jedinstvenim na tržištu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Stručni tim</h3>
              <p>Naš tim čine stručnjaci predani stvaranju vrhunskih proizvoda za vaše zdravlje.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Leaf className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Prirodni sastojci</h3>
              <p>Koristimo samo najkvalitetnije prirodne sastojke u našim proizvodima.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Briga o kupcima</h3>
              <p>Vaše zadovoljstvo i zdravlje su nam na prvom mjestu.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <ShoppingBag className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Širok asortiman</h3>
              <p className="text-center">Od čajeva do lješnjaka, imamo sve za vaše potrebe.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Vrhunska kvaliteta</h3>
              <p className="text-center">Naši proizvodi prolaze stroge kontrole kvalitete.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Truck className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Brza dostava</h3>
              <p className="text-center">Dostavljamo svježe proizvode direktno do vašeg praga.</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          variants={fadeInUpVariants}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-lg font-semibold text-orange-600 border-orange-600 hover:bg-orange-100"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Što nudimo?
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


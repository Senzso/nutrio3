'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const products = [
  {
    id: '1',
    title: 'Kamilica Čaj',
    description: 'Organski čaj od kamilice',
    code: 'ČK-0001',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kamilica.jpg-AY73dxd19Hi9zKDdhmKDthMLgkVKWY.jpeg',
    details: {
      description: 'Naš organski čaj od kamilice je pažljivo ubran i osušen kako bi sačuvao sve ljekovite sastojke. Savršen je za opuštanje i poboljšanje kvalitete sna.',
      price: '3.99€',
      quantity: '20 vrećica'
    }
  },
  {
    id: '2',
    title: 'Šipak Čaj',
    description: 'Čaj od divljeg šipka',
    code: 'SC-002',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%C5%A1ipak.jpg-fssXIazhPWJZOfwbDYJYLv7vWfE9nq.jpeg',
    details: {
      description: 'Čaj od divljeg šipka bogat je vitaminom C i antioksidansima. Idealan je za jačanje imuniteta i poboljšanje općeg zdravlja.',
      price: '4.50€',
      quantity: '50g'
    }
  },
  {
    id: '3',
    title: 'Granola od lješnjaka',
    description: 'Hrskava granola s lješnjacima',
    code: 'GL-003',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hazelnut%20granola.jpg-fiVupuMgPgvDiRINoG1FRP18ORatww.jpeg',
    details: {
      description: 'Naša granola od lješnjaka je savršen spoj hrskavog zobanog brašna i svježe pečenih lješnjaka. Idealna je za zdrav i ukusan početak dana.',
      price: '6.99€',
      quantity: '350g'
    }
  },
  {
    id: '4',
    title: 'Liker od lješnjaka',
    description: 'Domaći liker od lješnjaka',
    code: 'LL-004',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liker.jpg-JPBcEXgJqytjN7Py8L3dVTVU8rUpoD.jpeg',
    details: {
      description: 'Naš domaći liker od lješnjaka napravljen je po tradicionalnoj recepturi. Savršen je kao digestiv ili dodatak desertima.',
      price: '15.99€',
      quantity: '0.5L'
    }
  },
  {
    id: '5',
    title: 'Lješnjakovo ulje',
    description: 'Hladno prešano ulje od lješnjaka',
    code: 'LU-005',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oil.jpg-WBXkURx1UlBnDVI2I1WX1uReYOoh8a.jpeg',
    details: {
      description: 'Naše hladno prešano ulje od lješnjaka zadržava sve nutritivne vrijednosti i karakterističan okus. Idealno je za salate i kao dodatak jelima.',
      price: '9.99€',
      quantity: '250ml'
    }
  },
  {
    id: '6',
    title: 'Lješnjakova jezgra',
    description: 'Svježe očišćeni lješnjaci',
    code: 'LJ-006',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kernel.jpg-vLYuBD3Hc13bSBQ8g3FlqZfA65nsJA.jpeg',
    details: {
      description: 'Naši svježe očišćeni lješnjaci su vrhunske kvalitete, idealni za grickanje ili kao dodatak u kulinarstvu.',
      price: '7.99€',
      quantity: '500g'
    }
  },
  {
    id: '7',
    title: 'Maslac od lješnjaka',
    description: 'Kremasti maslac od prženih lješnjaka',
    code: 'ML-007',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maslac.jpg-Ri1AhJPgiAt9qz1ZQObx5x8h4VEyUI.jpeg',
    details: {
      description: 'Naš maslac od lješnjaka je napravljen od svježe prženih lješnjaka, bez dodataka šećera ili ulja. Savršen je kao namaz ili dodatak smoothiejima.',
      price: '8.99€',
      quantity: '100g'
    }
  },
  {
    id: '8',
    title: 'Pekmez od šipka',
    description: 'Domaći pekmez od divljeg šipka',
    code: 'PS-008',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jam.jpg-yJsEzoW8pd8NWECVMT3ShiV9H14Au4.jpeg',
    details: {
      description: 'Naš domaći pekmez od divljeg šipka je pun vitamina i minerala. Savršen je kao namaz ili dodatak jogurtu i žitaricama.',
      price: '5.25€',
      quantity: '320g'
    }
  },
  {
    id: '9',
    title: 'Brašno od lješnjaka',
    description: 'Fino mljeveno brašno od lješnjaka',
    code: 'BL-009',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flour.jpg-Py1dtQ64CL1cVcvPxrkGRhrlRv78Tf.jpeg',
    details: {
      description: 'Naše brašno od lješnjaka je fino mljeveno i savršeno za pripremu bezglutenskih slastica i kao dodatak smoothiejima.',
      price: '11.99€',
      quantity: '250g'
    }
  },
  {
    id: '10',
    title: 'Čaj od šipka i kamilice',
    description: 'Mješavina čaja od divljeg šipka i kamilice',
    code: 'CSK-010',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rosehip%20and%20chamomile%20tea.jpg-cY7P085xP3sZ97pnoXvz7StLmX5Wg7.jpeg',
    details: {
      description: 'Ova jedinstvena mješavina čaja kombinira blagodati divljeg šipka i umirujuća svojstva kamilice. Idealan za opuštanje i jačanje imuniteta.',
      price: '5.50€',
      quantity: '20 vrećica'
    }
  }
]

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductCatalog() {
  const [filter, setFilter] = useState('')

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <section id="catalog" className="py-32 px-4 bg-[#F7F6F2] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent opacity-50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-6xl font-bold mb-12 mt-8 text-center text-orange-700 font-fraunces"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          Naš Katalog
        </motion.h2>
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          
        </motion.div>
        <motion.div 
          variants={fadeInUpVariants} 
          initial="hidden" 
          animate="visible"
          className="relative mb-12 group"
        >
          <input
            type="text"
            placeholder="Pretraži proizvode..."
            className="w-full pl-4 pr-10 py-2 border-2 border-orange-300 rounded-lg text-lg bg-white bg-opacity-80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-300 ease-in-out"
            onChange={(e) => setFilter(e.target.value)}
          />
          <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-colors duration-300 group-hover:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        <motion.h3 
          className="text-4xl font-bold mt-16 mb-8 text-center text-orange-600 font-fraunces"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          Novi proizvodi u našoj ponudi
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((index) => (
            <div key={`new-product-${index}`} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-64">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <p className="text-lg font-semibold text-gray-500">Uskoro...</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


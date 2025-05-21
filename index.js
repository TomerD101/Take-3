import Head from 'next/head'
import { motion } from 'framer-motion'
import { LucideGem, LucideSearch, LucideUserPlus } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Diamond Rows</title>
      </Head>

      <header className="p-6 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <LucideGem className="text-blue-500" />
          DiamondRows
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-sm">Login</button>
          <button className="bg-black text-white rounded px-4 py-2 text-sm flex items-center">
            <LucideUserPlus className="mr-2 h-4 w-4" /> Request Access
          </button>
        </div>
      </header>

      <main className="px-8 py-12">
        <section className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Precision Diamond Rows for Jewelers Worldwide
          </motion.h1>
          <p className="text-lg text-gray-600">
            Explore premium, calibrated diamond rows by size, shape and quality
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by shape, size or color..."
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <button className="p-2 border border-gray-300 rounded">
              <LucideSearch className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <button className="border px-4 py-2 rounded">Round</button>
            <button className="border px-4 py-2 rounded">Oval</button>
            <button className="border px-4 py-2 rounded">Princess</button>
            <button className="border px-4 py-2 rounded">Marquise</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { shape: 'Round', desc: '0.73 g/cpm · GGr · 0.002 Ct' },
              { shape: 'Oval', desc: '0.54 g/mm · 0.8 Cl · 0.40 pm' },
              { shape: 'Princess', desc: '0.55 g/cmm · A7Or · 0.135 Caritv' },
              { shape: 'Marquise', desc: '0.46 g/mm · 0.4 CIV · 1.69 att' },
            ].map((item, i) => (
              <div key={i} className="border p-4 rounded shadow">
                <img src="/diamond-line.jpg" alt={item.shape} className="mb-2" />
                <h2 className="font-semibold text-lg mb-1">{item.shape} Diamond</h2>
                <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                <button className="bg-black text-white px-4 py-2 rounded w-full text-sm">Request a Quote</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 p-6 border-t mt-12">
        © 2025 DiamondRows. All rights reserved.
      </footer>
    </div>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"

export default function HomePage() {

  return (

<div className="min-h-screen bg-gradient-to-br from-turquoise-100 to-lavender-200">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
       
      <Header/>
     
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 
            className="text-5xl font-extrabold text-center text-gray-900 mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Welcome to Our Store
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-center text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Discover amazing products and unbeatable deals!
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link href="/server-side">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Server Side
              </motion.button>
            </Link>
            <Link href="/fetchApi">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-pink-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Client Side
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <FeatureCard
              icon="bx-store"
              title="Wide Selection"
              description="Browse through our extensive collection of products."
            />
            <FeatureCard
              icon="bx-shield-quarter"
              title="Secure Shopping"
              description="Shop with confidence knowing your data is protected."
            />
            <FeatureCard
              icon="bx-support"
              title="24/7 Support"
              description="Our customer service team is always here to help."
            />
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">BT Store</h2>
              <p className="text-gray-400">Your one-stop shop for everything</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <i className='bx bxl-facebook text-2xl'></i>
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <i className='bx bxl-twitter text-2xl'></i>
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <i className='bx bxl-instagram text-2xl'></i>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2023 BT Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}


function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <i className={`bx ${icon} text-4xl text-indigo-600 mb-4`}></i>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

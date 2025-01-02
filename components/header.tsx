import Link from 'next/link'
import React, { useEffect } from 'react'
import { useCart } from "@/components/cartContext";
import { useState } from 'react'


import { motion } from "framer-motion"

export default function Header() {
  const { cartItems } = useCart();
  const [scrolled, setScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const cartCount = cartItems.length;
  return (
    <div>
    <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">BT Store</span>
            </Link>
          </motion.div>
          <div className="flex items-center">
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/server-side">Server Side</NavLink>
              <NavLink href="/fetchApi">Client Side</NavLink>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={`/fetchApi/product`} className='flex justify-center items-center'>
                  <i className='bx bxs-bell text-2xl text-indigo-600 cursor-pointer'></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>
                </Link>
              </motion.div>
            </motion.div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/server-side">Server Side</NavLink>
          <NavLink href="/fetchApi">Client Side</NavLink>
          <Link href={`/fetchApi/product`} className='flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors duration-200'>
            <i className='bx bxs-bell text-2xl text-indigo-600 cursor-pointer'></i>
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      </motion.div>
    </nav>

         {/* <nav className={`fixed w-full z-10 transition-all duration-300`}>
=======
     
        <nav className={`fixed w-full z-10 transition-all duration-300`}>
>>>>>>> cc407f92d6c78f4cc68ee687a170217b68dc25d6
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">BT Store</span>
              </Link>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/server-side">Server Side</NavLink>
              <NavLink href="/fetchApi">Client Side</NavLink>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={`/fetchApi/product`} className='flex justify-center items-center'>
                <i className='bx bxs-bell text-2xl text-indigo-600 cursor-pointer'></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </nav>  */}
    </div>
  )
}
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">
      {children}
    </Link>
  )
}

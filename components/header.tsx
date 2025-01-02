import Link from 'next/link'
import React from 'react'
import { useCart } from "@/components/cartContext";
import { motion } from "framer-motion"

export default function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.length;
  return (
    <div>
     
        <nav className={`fixed w-full z-10 transition-all duration-300`}>
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
      </nav>
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

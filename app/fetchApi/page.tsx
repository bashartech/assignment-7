"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ITodo {
    
    id: number,
    title: string,
    price: number,
    category: string,
    description: string
    image:string,
    
} 

export default function FetchPage() {
    const [data, setData] = useState<ITodo[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            const parsedData = await fetch("https://fakestoreapi.com/products")  
            const response:ITodo[] = await parsedData.json()
            console.log(response)
           setData(response)
          }
          fetchData()
          setLoading(false)
    },[setData])
    if(loading){
      return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
    }

 return (
  <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">BT Store</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Home</Link>
              <Link href="/server-side" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Server Side</Link>
              <Link href="/fetchApi" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Client Side</Link>
            </div>
          </div>
        </div>
      </nav>
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h1>
    <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        {data.map((item, index) => (
            <motion.div 
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
            >
                <div className="relative h-64 overflow-hidden">
                    <Image 
                        src={item.image} 
                        alt={item.title}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                        ${item.price.toFixed(2)}
                    </div>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{item.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {item.category}
                        </span>
                        <Link href={`/product/${item.id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            View Details
                        </Link>
                    </div>
                </div>
            </motion.div>
        ))}
    </motion.div>
</div>
  </>
   
  )
}


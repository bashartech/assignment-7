"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@/components/header";
// Update the path as needed

interface ITodo {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function FetchPage() {
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const parsedData = await fetch("https://fakestoreapi.com/products");
      const response: ITodo[] = await parsedData.json();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [setData]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-turquoise-100 to-lavender-200">
        <motion.div
          className="w-32 h-32 border-t-4 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-turquoise-100 to-lavender-200 transition-all duration-500">
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            className="text-5xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {data.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative h-64 overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-turquoise-400 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ${item.price.toFixed(2)}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gradient-to-r from-lavender-400 to-peach-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                      <Link href={`/fetchApi/${item.id}`}>
                        <motion.button
                          className="bg-gradient-to-r from-blue-500 to-turquoise-400 hover:from-blue-600 hover:to-turquoise-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}


"use client"
import { useCart } from "@/components/cartContext";
import Header from "@/components/header";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <>
    <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    {/* <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Your Cart</h1>
      <div>
      <h2>Total Price: ${totalPrice()}</h2>
 </div>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Quantity: {item.quantity}</span>
                  <span className="text-gray-700">Subtotal: ${item.price * item.quantity}</span>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <Link href="/checkout" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-8 block text-center">
        Proceed to Checkout
      </Link>
    </div> */}
    <div className="min-h-screen bg-gradient-to-br from-turquoise-100 to-lavender-200 transition-all duration-500">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Total Price: ${totalPrice().toFixed(2)}
          </h2>
        </motion.div>
        {cartItems.length === 0 ? (
          <motion.p
            className="text-center text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
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
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Quantity: {item.quantity}</span>
                      <span className="text-blue-600 font-semibold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <motion.button
                      className="mt-4 w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
                      onClick={() => removeFromCart(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/checkout">
            <motion.button
              className="w-full bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Proceed to Checkout
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
}

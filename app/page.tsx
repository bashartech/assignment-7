// import Link from "next/link"
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <Link href={"/server-side"}>Server Side</Link>
//       <Link href={"/fetchApi"}>Client Side</Link>
//     </div>
//   )
// }
import Link from "next/link"


export default async function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
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
<div className="h-[80vh] flex justify-center items-center">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Welcome to Our Store
          </span>
        </h1>

        {/* Center Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <Link href="/server-side" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Server Side
          </Link>
          <Link href="/fetchApi" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
            Client Side
          </Link>
        </div>

        
      </div>

</div>
    </div>
  );
}
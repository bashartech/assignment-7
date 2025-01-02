"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import { useCart } from "@/components/cartContext";
import Header from "@/components/header";

interface ITodo {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export default function Section10({ params, }: { params: { item: string } }) {
  const { addToCart } = useCart();
  const [data, setData] = useState<ITodo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const parsedData = await fetch(
        `https://fakestoreapi.com/products/${params.item}`
      );
      const response: ITodo = await parsedData.json();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [params.item]);

  const handleButton = () => {
    alert("Product is added in cart")
  }
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(
  //         `https://fakestoreapi.com/products/${params.item}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch product data.");
  //       }

  //       const productData: ITodo = await response.json();
  //       setData(productData);
  //     } catch (err: any) {
  //       setError(err.message || "An unexpected error occurred.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [params.item]);

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
  // if (error) {
  //   return <div className="text-center text-red-500">{error}</div>;
  // }

  if (!data) {
    return (
      <motion.p
        className="text-center text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No product data available.
      </motion.p>
    );
  }
  return (
  //   <div className="">
  //     <link
  //       href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  //       rel="stylesheet"
  //     />
  //     <Header />
  //     {/* {data.length === 0 ? (
  //       <p className="text-center text-lg text-gray-600">Loading...</p>
  //     ) : (
  //       data.map((item, index) => ( */}
  //         <div >
  //           <div className="lg:w-screen mt-10 flex overflow-hidden justify-center items-center lg:h-[92px]">
  //             <div className="lg:w-[1049px]  mb-5  md:h-full flex  items-center">
  //               <h1 className="text-[16px]font-bold text-[#252B42]">Home/</h1>
  //               <i className="bx bx-chevron-right text-2xl text-[#737373]"></i>
  //               <h1>Shop</h1>
  //             </div>
  //           </div>
  //           <div className="lg:w-screen  lg:h-[598px] flex justify-center items-center">
  //             <div className="lg:w-[1050px]  w-[400px] lg:flex lg:h-[550px] gap-10 ">
  //               <div className="left lg:w-1/2">
  //                 <div className="lg:w-[506px] md:h-[450px] ">
  //                   <Image
  //                     src={data.image}
  //                     alt="hero image"
  //                     width={506}
  //                     height={450}
  //                   ></Image>
  //                 </div>
  //                 <div className="w-full mt-2 h-[75px] flex gap-2">
  //                   <Image
  //                     src={data.image}
  //                     alt="hero image"
  //                     width={100}
  //                     height={75}
  //                   ></Image>
  //                   <Image
  //                     src={data.image}
  //                     alt="hero image"
  //                     width={100}
  //                     height={75}
  //                   ></Image>
  //                 </div>
  //               </div>
  //               <div className="right flex justify-center  pt-5 lg:w-1/2">
  //                 <div className="lg:w-[510px] p-8  w-[400px] flex flex-col  gap-5 lg:h-[471px]">
  //                   <h1 className="text-[20px] font-bold">{data.title}</h1>
  //                   <div className=" flex gap-3">
  //                     <div className="icon  text-[#F3CD03]">
  //                       <i className="bx bxs-star text-lg"></i>
  //                       <i className="bx bxs-star text-lg"></i>
  //                       <i className="bx bxs-star text-lg"></i>
  //                       <i className="bx bxs-star text-lg"></i>
  //                       <i className="bx bx-star text-lg"></i>
  //                     </div>
  //                     <h1
  //                       className="font-bold
  //               "
  //                     >
  //                       10 Reviews
  //                     </h1>
  //                   </div>
  //                   <p className="font-bold text-[24px]">${data.price}</p>
  //                   <div>
  //                     <span className="font-bold">Availability :</span>
  //                     <span className="font-bold text-[#23A6F0]">
  //                       In Stock{" "}
  //                     </span>
  //                   </div>
  //                   <p>{data.description}</p>
  //                   <div className="line w-[445px] bg-[#BDBDBD] h-[1px]"></div>
  //                   <div className="colors flex gap-2 w-[150px] h-[30px]">
  //                     <div
  //                       className="w-[30px] bg-[#23A6F0]
  //  h-[30px] rounded-full"
  //                     ></div>
  //                     <div className="w-[30px] bg-[#2DC071]  h-[30px]  rounded-full"></div>
  //                     <div className="w-[30px] bg-[#E77C40] h-[30px] rounded-full"></div>
  //                     <div className="w-[30px] bg-[#252B42] h-[30px] rounded-full"></div>
  //                     <div className="w-[30px] bg-[] h-[30px] rounded-full"></div>
  //                   </div>
  //                   <div className="icon flex gap-3">
  //                     <Button
  //                       className='font-bold bg-[#23A6F0]  w-[148px] h-[44px] ">
  //                 '
  //                       onClick={(e) => {
  //                         e.preventDefault();
  //                         addToCart({
  //                           id: data.id,
  //                           title: data.title,
  //                           price: data.price,
  //                           quantity: 1,
  //                           image: data.image,
  //                           description: data.description,
  //                         });
  //                       }}
  //                     >
  //                       Select Options
  //                     </Button>
  //                     <div className=" flex gap-4 justify-center items-center ">
  //                       <i className="bx bx-cart "></i>
  //                       <i className="bx bx-heart "></i>
  //                       <Image
  //                         src={data.image}
  //                         alt="hero image"
  //                         width={20}
  //                         height={20}
  //                       ></Image>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       {/* ))
  //     )} */}
  //   </div>
  <div className="bg-gradient-to-br from-turquoise-100 to-lavender-200 min-h-screen">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8">
              <motion.div
                className="relative h-[450px] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
              <div className="mt-4 flex gap-2">
                <motion.div
                  className="w-20 h-20 relative rounded-md overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
                <motion.div
                  className="w-20 h-20 relative rounded-md overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8">
              <motion.h1
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {data.title}
              </motion.h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.i
                      key={i}
                      className={`bx ${i < 4 ? 'bxs-star' : 'bx-star'} text-lg`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">10 Reviews</span>
              </div>
              <motion.p
                className="text-3xl font-bold text-blue-600 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                ${data.price}
              </motion.p>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {data.description}
              </motion.p>
              <div className="mb-6">
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="ml-2 text-green-500 font-semibold">In Stock</span>
              </div>
              <div className="flex gap-2 mb-6">
                {['#23A6F0', '#2DC071', '#E77C40', '#252B42', '#808080'].map((color) => (
                  <motion.div
                    key={color}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4" onClick={handleButton}>
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-turquoise-400 hover:from-blue-600 hover:to-turquoise-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart({
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    quantity: 1,
                    image: data.image,
                    description: data.description,
                  })}
                >
                  Add to Cart
                </motion.button>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <i className="bx bx-heart text-2xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors duration-300" />
                  <i className="bx bx-cart text-2xl text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

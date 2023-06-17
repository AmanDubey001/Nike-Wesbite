import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
   <Link
   className='transform overflow-hidden bg-white duration-200 hover:scale-105'
   href="/Product/ProductDetails">
   <Image className='w-full' width={100} height={100} src="/product-1.webp"/>
   <div className='p-4'><h2 className='text-black text-[16px] font-bold'>Product Name </h2>
   <div className='text-[14px] text-[grey] flex items-center '>
    <p>$20</p>
    <p className='line-through ml-2 font-bold'>$200</p>
    <p className='text-[green] ml-auto font-bold'>20% OFF</p>

   </div>
   </div>
   </Link>
  )
}

export default Product

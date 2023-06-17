import React from 'react'
import { useRouter } from 'next/router'
import Product from '@/components/Product';

const RunningShoes = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1000px] mx-auto">
    <h1 className="text-start text-[25px] px-2 text-black font-oswal mt-[100px] leading-10 font-[500] md:text-center text-[32px] font-[700]">Running Shoes</h1>
            <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3" >
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
            </div>
    </div>
  )
}

export default RunningShoes

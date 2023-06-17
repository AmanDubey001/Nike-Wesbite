import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const CardItem = () => {
  return (
    <div className='shadow-sm w-full my-2 rounded-md p-2 flex gap-2' >
        <div>
            <Image width={100} height={100} src="/product-1.webp"/>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-between'>
         <div className='flex flex-col'>
          <h2 className='text-[1rem] text-black font-bold md:text-xl'>Jordan Retro 6G</h2>
          <h2 className='text-[1rem] text-black'>Men's Golf Shoes</h2>
         </div>
         <div><h2 className='text-[1rem] text-[green] font-bold'>MRP: 19,500</h2>
        <div className='ml-10 mt-5 text-[20px]'><RiDeleteBin6Line/></div>
</div>
        </div>

    </div>
  )
}

export default CardItem

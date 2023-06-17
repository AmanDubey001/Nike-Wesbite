import Product from '@/components/Product'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="relative  text-white text-[20px] w-full max-w-[1000px] mx-auto py-10">
     <div className='flex text-black justify-center flex-col px-4  md:flex-row justify-around'>
     <div className='w-full text-center md:w-[45%] h-[100%]'>
        <ProductDetailsCarousel/>
     </div>

     <div className='w-full text-left md:w-[40%]'>
     <div className="text-[34px] font-semibold mb-2 leading-tight">Jordan Retro 6G </div>
     <div className="text-lg font-semibold mb-5 ">
        Men's Golf Shoes
        </div>


        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;19,700
                            </p>
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;25,000
                                    </p>
                                    <p className="ml-auto text-base font-bold text-green-500">
                                        50
                                        % off
                                    </p>
                                </>
                          
                        </div>
                
                <div className='flex mt-5 text-sm font-md cursor-pointer'>
                 <p>Select Size</p>
                 <p className='ml-auto text-[grey] cursor-pointer'>Select Guide</p>
             
                </div>

                <div id="sizesGrid" className="mt-2 grid grid-cols-3 gap-2">
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'> 6 UK</div>
                 <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed opacity-50 bg-black/[0.2]'> 6 UK</div>
               </div>

               <div className="text-red-600 mt-1 text-sm">
                                    Size selection is required
                 </div>

               <button className="w-full mt-6 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
               </button>


               <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                </button>

                <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-sm mb-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque ratione voluptatum! Vero quo beatae culpa, aliquid ad iste maiores, fuga deleniti eligendi, ab animi magnam consequatur! Debitis, perferendis ex?
                            </div>
                        </div>
               
      </div>
    </div>
     <RelatedProducts/>
    </div>
  )
}

export default ProductDetails

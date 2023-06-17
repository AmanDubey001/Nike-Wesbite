import CardItem from '@/components/CardItem'
import React from 'react'

const Cart = () => {
  return (
    <div className=" text-black my-20  text-[30px] w-full max-w-[1000px] md:mx-auto">
    <h1 className='text-center font-bold'>Shopping Cart</h1>   

         <div className='flex flex-col justify-around mt-20 md:flex-row'>
           <div className='w-full md:w-[40%] mx-auto'>
            <CardItem/>
            <CardItem/>
            <CardItem/>
           </div>

           <div className='w-full md:w-[40%] mx-auto'>
           <div className="text-lg text-center font-bold">Summary</div>

<div className="p-5 my-5 bg-black/[0.05] rounded-xl">
    <div className="flex justify-between">
        <div className="uppercase text-md md:text-lg font-medium text-black">
            Subtotal
        </div>
        <div className="text-md md:text-lg font-medium text-black">
             1234
        </div>
    </div>
    <div className="text-sm md:text-md py-5 border-t mt-5">
        The subtotal reflects the total price of
        your order, including duties and taxes,
        before any applicable discounts. It does
        not include delivery costs and
        international transaction fees.
    </div>
</div>

{/* BUTTON START */}
<button
    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
>
    Checkout
</button>

</div>
      </div>
      </div>
  )
}

export default Cart

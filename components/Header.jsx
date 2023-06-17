import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import WrapperMobile from './WrapperMobile';



const Header = () => {
  const [showCat, setShowCat] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [show,setShow] = useState("translate-y-0");
  const [lastScroll, setLastScroll] = useState(0);

  const controlNavbar = () =>{
   
    if(window.scrollY > 500){
    if(window.scrollY>lastScroll) setShow("-translate-y-[80px]"); 
    else setShow("shadow-sm");   
    }
    else setShow("translate-y-0");


    setLastScroll(window.scrollY);   
  }

  useEffect(()=>{
   window.addEventListener("scroll",controlNavbar);

   return ()=>{
    window.removeEventListener("scroll",controlNavbar)
   }

},[lastScroll]);


  return (
    <div className= {`max-w-[800px] flex justify-between items-end h-[50px] p-2 z-20 md:mx-auto sticky h-[60px] py-4 transition-transform duration-300 ${show}`}>
      <Link href="/">
        <Image height={50} width={60} src="/logo.svg" />
      </Link>
      <Wrapper showCat={showCat} setShowCat={setShowCat}/>

     {mobile && <WrapperMobile showCat={showCat} setShowCat={setShowCat} setMobile={setMobile}/>}


    <div className='flex px-4 items-center'>
      <Link href="/">
      <div className='flex relative px-1 mr-6 cursor-pointer'>
       <AiFillHeart className='h-8 w-8  hover:text-[red] '/>
       <div className='text-[red] rounded-full absolute bottom-3 left-9 font-[600] text-[20px]'>5</div>
      </div>
    </Link>

    <Link href="/cart">
      <div className='flex relative px-1 cursor-pointer'>
       <BsFillCartCheckFill className='h-8 w-8 hover:text-[green] '/>
       <div className='text-[green] rounded-full absolute bottom-3 left-9 font-[600] text-[20px]'>10</div>
      </div>
   </Link>
      <div className='px-1 cursor-pointer ml-10 md:hidden'>
      {mobile?(<AiFillCloseCircle className="h-6 w-6"
       onClick = {()=> setMobile(false)}
      />):(<GiHamburgerMenu className="h-6 w-6"
      onClick = {()=> setMobile(true)}

      />)}
      </div>

    </div>


    </div>
  )
}

export default Header

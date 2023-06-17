import Link from 'next/link'
import React from 'react'
import { BiCaretDown } from "react-icons/bi";


const Wrapper = ({showCat , setShowCat}) => {

const menu = [
{id:1, name:"Home",url:"/"},
{id:2, name:"About",url:"/about"},
{id:3, name:"Categories",subMenu:true},
{id:4, name:"Contact",url:"/contact"}
]

const categories =[

    {id:1, name:"Jordan",count:"78"},
    {id:2, name:"Sneakers",count:"78"},
    {id:3, name:"Running Shoes",count:"78"},
    {id:4, name:"Football Shoes",count:"78"}

]

  return (
    <div>
     <ul className='hidden md:flex space-x-8 items-center'>
      {
       menu.map( item => {
        return (item.subMenu ? <li className='cursor-pointer flex items-center '
        onMouseEnter={()=> setShowCat(true)}
        onMouseLeave={()=>setShowCat(false)}
        >{item.name} 
                   <BiCaretDown/>   
                { showCat && (
            <ul className='absolute top-10 bg-[#cdc1ff] p-2 opacity-2 rounded-lg shadow-md'
            >
              {categories.map(item=>{
                return (<li onClick={()=> setShowCat(false)} className='p-1 flex justify-between gap-4 hover:bg-[#e5d9f2] hover:rounded-lg' style={{borderBottom:"1px solid black"}}  key={item.id}>{item.name} <span>{item.count}</span></li>)
              })
              }
            </ul>
                )
                }  
        
        </li> : (<li>
            <Link href={item.url}>
              {item.name} 
              </Link>
              </li>))
       })
      }
    </ul> 
    </div>
  )
}

export default Wrapper

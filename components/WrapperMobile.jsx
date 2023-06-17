import Link from 'next/link'
import React from 'react'
import { BiCaretDown } from "react-icons/bi";


const WrapperMobile = ({showCat , setShowCat, setMobile}) => {

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
     <ul className='flex flex-col md:hidden absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t-black'>
      {
       menu.map( item => {
        return (item.subMenu ? <li className='flex flex-col p-2'
          onClick = { ()=> setShowCat(!showCat)}
        ><div className='flex items-center'>{item.name} 
                   <BiCaretDown/>  
         </div> 
                { showCat && (
            <ul className='w-full bg-[#cdc1ff] p-2 opacity-2 rounded-lg shadow-md'
            >
              {categories.map(item=>{
                return (<li onClick={()=> {
                    setShowCat(false)
                    setMobile(false)
                }} className='p-1 flex justify-between gap-4 hover:bg-[#e5d9f2] hover:rounded-lg' style={{borderBottom:"1px solid black"}}  key={item.id}>{item.name} <span>{item.count}</span></li>)
              })
              }
            </ul>
                )
                }  
        
        </li> : (<li className='p-2'>
            <Link href={item.url} onClick={()=>setMobile(false)}>
              {item.name} 
              </Link>
              </li>))
       })
      }
    </ul> 
    </div>
  )
}

export default WrapperMobile

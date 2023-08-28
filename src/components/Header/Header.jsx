import React, { useState } from 'react'
import {motion} from 'framer-motion'
import logo from "./logo.svg"
import home from "./home-icon.svg"
import movie from "./movie-icon.svg"
import original from "./original-icon.svg"
import series from "./series-icon.svg"
import search from "./search-icon.svg"
import watchlist from "./watchlist-icon.svg"
import { textVariant,fadeIn,zoomIn,slideIn, } from '../../utils/motion'



export const Header = () => {

  const menu=[
    {name:'HOME',icon:home},
    {name:'SEARCH',icon:search},
    {name:'WATCHLIST',icon:watchlist},
    {name:'ORIGINALS',icon:original},
    {name:'MOVIES',icon:movie},
    {name:'SERIES',icon:series},
  ]

  const [toggle, setToggle] = useState(false);
  return (

    <motion.div
    variants={slideIn("right",'spring',0.2,3)} 
        initial="hidden"
        animate="show" 
    
    className={`flex flex-row justify-between items-center py-[17px] px-[35px] z-[3] font-poppins tracking-wider font-light`}>
      <div className='flex flex-row justify-between items-center '>
      <img src={logo} height="110px" width="110px"  />
      <div className='pl-[20px] flex flex-row'>
        {menu.map((item,index)=>(
             <a key={index} href='/' className='flex flex-row ml-[30px] justify-center items-center hover:scale-110 hover:border-b-2 hover:border-blue-300 pt-[1px] transition-all duration-100 hover:text-blue-300 relative '>
               <div className='hover:cursor-pointer mr-[3px]'>
              <img src={item.icon} alt={item.name} height={23} width={23}/>
              </div> 
              <div className='pt-[3px] hover:cursor-pointer'>{item.name}</div>
            </a>
))} 
      </div>
      </div>
      <motion.div 

       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      className="border-[1px] border-solid border-white flex justify-center items-center p-[7px] px-[22px] rounded-md font-poppins text-[20px] tracking-wider hover:cursor-pointer hover:bg-white hover:text-blue-500 transition-all ease-in  ">
        Login
      </motion.div>
    </motion.div>
  )
}

export default Header
import React from 'react'
import first from "./cta-logo-one.svg"
import third from "./cta-logo-two.png"
import { motion } from 'framer-motion'
import { textVariant,fadeIn,zoomIn,slideIn } from '../../utils/motion'


export const Login = () => {
  return (
    <motion.div className=" flex bg-[url('/src/components/Login/login-background.jpg')] bg-cover relative h-[800px] -z-1 items-center justify-center ">
      <section className="flex flex-1 flex-col justify-center items-center max-w-[639px] tablet:max-w-[799px] py-[40px] px-[40px] space-y-4 mb-[100px] ">
        <motion.div  
         variants={zoomIn(0.2,1)} 
          initial="hidden"
         animate="show"
        >
          <img src={first} width="900px" />
        </motion.div>


        <motion.button 
        variants={zoomIn(0.2,3)} 
        initial="hidden"
        animate="show"
        className='bg-blue-600 h-[50px] tablet:h-[70px] w-full  laptop:w-[740px] rounded-md font-poppins font-semibold mobile:font-bold tablet:font-extrabold  text-[12px] mobile:text-[15px] tablet:text-[20px] laptop:text-[20px] tracking-wider hover:bg-blue-500 hover:scale-105 transition-all ease-in-out' >
          GET &nbsp; ALL &nbsp; THERE
        </motion.button>
        <motion.div 
        variants={zoomIn(0.2,1)} 
        initial="hidden"
        animate="show"
        className='flex flex-col justify-center items-center text-[13px] tracking-widest'>
          <h5>
            Get premier Access to Raya and the Last dragon for an additional fee with a Disney+ subscription.
          </h5>
          <h5>
            As of 03/09/2023,the price of Disney+ and The Disney bundle will increase by $1.
          </h5>
        </motion.div>




        <motion.div 
        variants={zoomIn(0.2,1)} 
        initial="hidden"
        animate="show"
        className='pt-[10px]'>
          <img src={third} />
        </motion.div>

      </section>
    </motion.div>


  )
}

export default Login
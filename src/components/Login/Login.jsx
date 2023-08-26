import React from 'react'
import first from "./cta-logo-one.svg"
import third from "./cta-logo-two.png"

export const Login = () => {
  return (
    <div className=" flex bg-[url('/src/components/Login/login-background.jpg')] bg-cover relative h-[800px] -z-1 items-center justify-center ">
      <section className="flex flex-1 flex-col justify-center items-center max-w-[639px] tablet:max-w-[799px] py-[40px] px-[40px] space-y-4 mb-[100px]">
        <div>
          <img src={first} width="900px" />
        </div>


        <button className='bg-blue-600 h-[50px] tablet:h-[70px] w-full  laptop:w-[740px] rounded-md font-poppins font-extrabold  text-[12px] mobile:text-[15px] tablet:text-[20px] laptop:text-[20px] tracking-wider ' >
          GET ALL THERE
        </button>
        <div className='flex flex-col justify-center items-center text-[13px] tracking-widest'>
          <h5>
            Get premier Access to Raya and the Last dragon for an additional fee with a Disney+ subscription.
          </h5>
          <h5>
            As of 03/09/2023,the price of Disney+ and The Disney bundle will increase by $1.
          </h5>
        </div>




        <div className='pt-[10px]'>
          <img src={third} />
        </div>

      </section>
    </div>


  )
}

export default Login
import React from 'react'
import NavBar from "./NavBar"
const SignIn = () => {
  return (
    <div className='w-screen flex flex-col items-center'>
      <NavBar/>
      <div className='w-[90%] md:w-1/3  flex  flex-col items-center mt-10 gap-2 border-1 border-gray-300  rounded-2xl shadow-2xl'>
       <h1 className='mt-5 text-xl font-bold'>Sign In</h1>
       <p className='text-sm text-gray-700'>Access your account</p>
       <form action="" className='w-[90%] my-5 md:w-[50%]'>
        <div className='w-[95%] mb-4'>
            <p className='text-sm text-gray-700 font-semibold pb-1.5 '>Email Address</p>
            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-3 focus:outline-none focus:border-black text-sm focus:border-1.8 duration-200' type="text" placeholder='✉ sample@gmail.com' />
        </div>
        <div className='w-[95%] '>
            <p className='text-sm text-gray-700 font-semibold pb-1.5'>Password</p>
            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-3 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' type="text" placeholder='🔒 sample123' />
        </div >
        <div className=' hover:flex justify-between w-full mt-4'>
            <div className='flex   gap-1'>
                <input type="checkbox" />
                <p className='text-sm text-gray-800 font-semibold hidden'>Remember me</p>
            </div>
            <div className=''>
                <p className='text-sm text-blue-600 font-semibold hover:cursor-pointer'>Forgot Password?</p>
            </div>
        </div>
        <button className='hover:flex w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200'>Sign In</button>
        <div className='w-full flex justify-center my-4 border-1 border-gray-200 '></div>

        <p className='text-sm text-center text-gray-700'>Already have an account?<span className='text-blue-600 font-semibold hover:cursor-pointer'>Signup here</span></p>
       </form>
      </div>
    </div>
  )
}

export default SignIn
import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-8 bg-yellow-700 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-yellow-100'>
          <h1 className='flex flex-row space-x-2 text-3xl font-semibold text-center text-gray-300 items-center justify-center'>
            <div>SignUp</div> 
            <span className='text-teal-500'> CatApp :3</span>
            <div className="avatar">
              <div className="w-20 rounded">
                <img src="/meow.png" alt="Cat Holding A Cellphone"/>
              </div>
            </div>
          </h1>

          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Full Name</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Name Here' 
                className='w-full input input-bordered input-primary h-10' />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>User Name</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Username Here' 
                className='w-full input input-bordered input-primary h-10' />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Password</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Password Here' 
                className='w-full input input-bordered input-primary h-10' />
            </div>
            
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Confirm Password</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Password Here' 
                className='w-full input input-bordered input-primary h-10' />
            </div>

            <GenderCheckBox/>

            <a href='#' className='text-sm text-yellow-400 hover:underline hover:text-yellow-100 mt-1 inline-block'>
              {"Already"} have an account?
            </a>

            <div>
              <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
            </div>
          </form>
      </div>

    </div>
  )
}

export default SignUp
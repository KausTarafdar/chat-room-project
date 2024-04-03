import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

import GenderCheckBox from './GenderCheckBox'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })
  console.log(inputs)

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(inputs)
  }
  
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

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Full Name</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Name Here' 
                className='w-full input input-bordered input-primary h-10' 
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>User Name</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter Your Username Here' 
                className='w-full input input-bordered input-primary h-10' 
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Password</span>
              </label>
              <input 
                type='password' 
                placeholder='Enter Your Password Here' 
                className='w-full input input-bordered input-primary h-10' 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </div>
            
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-yellow-200'>Confirm Password</span>
              </label>
              <input 
                type='password' 
                placeholder='Confirm Password' 
                className='w-full input input-bordered input-primary h-10' 
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              />
            </div>

            <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

            <Link to='/login' className='text-sm text-yellow-400 hover:underline hover:text-yellow-100 mt-1 inline-block'>
              {"Already"} have an account?
            </Link>

            <div>
              <button className='btn btn-block btn-sm mt-2 text-white'
              disabled={loading}
              >
                {loading ? <span className='loading loading-spinner'></span> : <strong>Sign Up</strong>}
              </button>
            </div>
          </form>
      </div>

    </div>
  )
}

export default SignUp
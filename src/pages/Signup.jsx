import React from 'react'

function Signup() {
  return (
    <div>
      <h1 className = 'text-3xl text-center'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input type='text' placeholder='username'
        className='border p-3 rounded-lg  text-green-300 bg-opacity-20 text-md' id='username '/>
        <input type='email' placeholder='email' 
        className='border p-3 rounded-lg  bg-opacity-20 text-md' id='email '/>
        <input type='password' placeholder='password'
        className='border p-3 rounded-lg bg-opacity-20 text-md' id='password '/>
      </form>
    </div>
  )
}

export default Signup

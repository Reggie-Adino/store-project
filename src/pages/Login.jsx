import React from 'react'

const Login = () => {
  return <form className="login-form">
    <span className="error-span"></span>
    <label htmlFor="email" className='login-label'>
        Email    
    </label> 
    <input type="text" name='email' className='login-inp' placeholder='Email'/>
    <label htmlFor="password" className='login-label'>
        Password   
    </label> 
    <input type="password" name='password' className='login-inp' placeholder='password'/>
    <button>Submit</button>
  </form>
}

export default Login
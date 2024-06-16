import React from 'react'
import './style.css'
const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Login Page</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='email'><string>Email:</string></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Email id' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><string>Password:</string></label>
                    <input type="password" name='password' autoComplete='off' placeholder='Password' className='form-control rounded-0' />
                </div>
                <div>
                    <button className='btn btn-success w-100 rounded-0'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import "./style.scss"

const Login = () => {
  return (
  <section className='login-page'>
  <div className='login'>
    <div className='login-box'>
      <h3 className='pb-3'>Login or Sign up</h3>
      <input className='mb-2' type="text"  placeholder='Mobile No'/>
      <p>By Contuning i agree the  <span>Terms of Use </span>& <span>Privacy Policy</span></p>
      <button>Login</button>
      <p>Have trouble logging in? <span>Get Help</span></p>
    </div>
  </div>


  </section>
  )
}

export default Login
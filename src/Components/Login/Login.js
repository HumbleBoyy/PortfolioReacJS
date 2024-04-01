import React from 'react'
import { loginWithGoogle } from '../../firebase/firebase'

const Login = () => {
  return (
    <div className='container2'>
      <button onClick={loginWithGoogle} className='login'>
         Log in with google
      </button>
    </div>
  )
}

export default Login

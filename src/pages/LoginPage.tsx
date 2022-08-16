import React from 'react'
import Button from '../components/common/Button';

const LoginPage = (props:any) => {

  const googleLogin = ()=>{
    window.open("http://localhost:4000/auth/google", "_self");
  }
  
  return (
    <>
    <h1>Login</h1>
      <div>
        <Button text="Google Login" onClick={googleLogin} />
      </div>
    </>
  )
}

export default LoginPage
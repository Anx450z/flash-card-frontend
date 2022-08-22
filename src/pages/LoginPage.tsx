import React from 'react'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'

const LoginPage = (props: any) => {
  const googleLogin = () => {
    window.open('http://localhost:4000/auth/google', '_self')
  }

  return (
    <>
      <div
        className={`item-center flex h-[94vh] justify-center overflow-hidden
        bg-gradient-to-t from-yellow-100 to-red-400 py-5 transition-all duration-500 ease-in-out`}>
        <div>
          <Card color="relative text-center top-[10%] bg-white">
            <h3 className=" text-2xl font-medium text-black/[0.7]"> Welcome to Flash Cards</h3>
            <div className="mt-[3rem] ">
              <p>
                Login with your existing account using the following
              </p>
              <Button text="Google Login" onClick={googleLogin} type="expanded" />
              <Button text="Twitter Login" type="expanded" />
              <Button text="GitHub Login" type="expanded" />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default LoginPage

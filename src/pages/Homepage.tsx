import React, { useContext } from 'react'
import { myContext } from "../Context";

const Homepage = () => {
  const context:any = useContext(myContext)
  return(
    <div>
      {context ? (
        <h1>Welcome back {context.firstName} !!</h1>
      ) : (
        <h1>Welcome to my website</h1>
      )}
    </div>
  )
}

export default Homepage

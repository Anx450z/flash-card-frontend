import React, { useContext } from 'react'
import { myContext } from '../Context'

const ProfilePage = () => {
  const context: any = useContext(myContext)
  return (
    <>
    <h1>Profile {context.firstName}</h1>
    </>
  )
}

export default ProfilePage

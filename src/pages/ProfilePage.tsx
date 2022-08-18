import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import { myContext } from '../Context'

const ProfilePage = () => {
  const context: any = useContext(myContext)

  const navigate = useNavigate()

  const handleNewFlash = () =>{
    navigate('/newflash')
  }
  
  return (
    <>
    <h1>Profile {context.firstName}</h1>
    <Button text="Add Flash" onClick={handleNewFlash}/>  
    </>
  )
}

export default ProfilePage

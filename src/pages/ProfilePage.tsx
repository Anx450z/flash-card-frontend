import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import FlashCard from '../components/FlashCard'
import { myContext } from '../Context'

const ProfilePage = () => {
  const context: any = useContext(myContext)
  const navigate = useNavigate()

  const handleNewFlash = () => {
    navigate('/newflash')
  }

  const [flashes, setFlashes] = useState([
    {
      question: 'NA',
      answer: 'NA',
      tag: 'NA',
      color: '#ffffff',
      id: 1
    },
  ])

  const getFlashes = () =>{
    axios
      .get('http://localhost:4000/api/user/4/flashes', {
        timeout: 5000,
      })
      .then(res => {
        console.log(res.data)
        setFlashes(res.data)
      })
      .catch(err => console.error(err))
  
    console.log("flashes",flashes)
  }
  
  useEffect(() => {
    getFlashes()
  },[])

  

  return (
    <>
      <Button text="Add Flash" onClick={handleNewFlash} />
      <h1>Profile {context.firstName}</h1>
      <ul>
        {flashes.map(flash => (
          <li key={flash.id}>
            <FlashCard
              question={flash.question}
              answer={flash.answer}
              tag={flash.tag}
              flashColor={flash.color}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProfilePage

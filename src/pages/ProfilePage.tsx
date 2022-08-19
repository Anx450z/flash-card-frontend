import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import FlashCard from '../components/FlashCard'
import { myContext } from '../Context'
import FlashTypes from '../types/FlashType'

const ProfilePage = () => {
  const context: any = useContext(myContext)
  const navigate = useNavigate()

  const handleNewFlash = () => {
    navigate('/newflash')
  }

  const [flashes, setFlashes] = useState<FlashTypes[]>([
    {
      question: 'NA',
      answer: 'NA',
      tag: 'NA',
      flashColor: '#ffffff',
      id: 0,
      updatedAt: Date.now().toString(),
      createdAt: Date.now().toString(),
      user_id: 0,
    },
  ])

  const getFlashes = () => {
    axios
      .get(`http://localhost:4000/api/user/${context.id}/flashes`, {
        timeout: 5000,
      })
      .then(res => {
        // console.log(res.data)
        setFlashes(res.data)
      })
      .catch(err => console.error(err))

    // console.log('flashes', flashes)
  }

  useEffect(() => {
    getFlashes()
  }, [])

  return (
    <>
      <div className="fixed right-5 bottom-5">
        <Button text="Add Flash" onClick={handleNewFlash} />
      </div>
      <h1>Profile {context.firstName}</h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-2 my-2 mb-[80px]">
        {flashes.map(flash => (
          <li key={flash.id}>
            <FlashCard
              question={flash.question}
              answer={flash.answer}
              tag={flash.tag}
              flashColor={flash.flashColor}
              createdAt={flash.createdAt}
              updatedAt={flash.updatedAt}
              id={flash.id}
              user_id={flash.user_id}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProfilePage

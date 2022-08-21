import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import ClearButton from '../components/common/ClearButton'
import ContextMenu from '../components/ContextMenu'
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
      favorite: false,
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
  const [show, setShow] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    getFlashes()
    const handleClick = () => setShow(false)
    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [show])

  // const ref = useRef(null)
  const handleContextMenu = (event: any) => {
    event.preventDefault()
    // console.log("ref ===",ref.current)
    // console.log("document===",document.getElementById(event.currentTarget))
    console.log('event===', event.currentTarget.id)
    setId(parseInt(event.currentTarget.id))
    setShow(true)
  }

  const deleteFlash = () => {
    axios
      .delete(`http://localhost:4000/api/flash/${id}/delete`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }

  const handleDelete = () => {
    console.log('deleting ', id)
    deleteFlash()
  }

  const handleEdit = () => {
    const selectedFlash = flashes.filter(flash => flash.id === id)[0]
    console.log("edit clicked", id, selectedFlash)
    navigate(`/edit`, {state : selectedFlash })
  }

  return (
    <>
      <div className="fixed right-5 bottom-5 z-[2]">
        <Button text="Add Flash" onClick={handleNewFlash} />
      </div>
      <div className='flex justify-center bg-slate-100'>
      <ul className={`bg-white mx-4 my-4 mb-[80px] grid grid-cols-2 gap-4 md:grid-cols-3
          p-4 rounded-xl max-w-[70rem] min-w-[25rem] border`}>
        {flashes.map(flash => (
          <li
            key={flash.id}
            id={flash.id.toString()}
            onContextMenu={handleContextMenu}
            className={` ${show && flash.id !== id ? 'blur-lg' : ''}`}>
            <FlashCard
              question={flash.question}
              answer={flash.answer}
              tag={flash.tag}
              flashColor={flash.flashColor}
              createdAt={flash.createdAt}
              updatedAt={flash.updatedAt}
              id={flash.id}
              user_id={flash.user_id}
              favorite={flash.favorite}
            />
          </li>
        ))}
      </ul>
      </div>
      {show && (
        <ContextMenu>
          <ClearButton color="text-red-600" size="text-lg" onClick={handleDelete}>
            Delete
          </ClearButton>
          <ClearButton size="text-lg" onClick={handleEdit}> Edit</ClearButton>
        </ContextMenu>
      )}
    </>
  )
}

export default ProfilePage

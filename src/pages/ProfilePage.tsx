import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import ClearButton from '../components/common/ClearButton'
import DropDown from '../components/common/DropDown'
import ContextMenu from '../components/ContextMenu'
import FlashCard from '../components/FlashCard'
import { myContext } from '../Context'
import FlashTypes from '../types/FlashType'

const backdrop = require('../assets/backdrop.jpg')

const ProfilePage = () => {
  const context: any = useContext(myContext)
  const navigate = useNavigate()

  const handleNewFlash = () => {
    navigate('/newflash')
  }

  const [flashes, setFlashes] = useState<FlashTypes[]>([
    {
      question: 'Add a Flash to get Started',
      answer: 'Edit the flash by right clicking on the flash',
      tag: 'tutorial',
      flashColor: '#ffffff',
      id: 0,
      updatedAt: new Date().toDateString(),
      createdAt: new Date().toString(),
      user_id: 0,
      favorite: false,
    },
  ])

  const [showFlashes, setShowFlashes] = useState<FlashTypes[]>()

  const getFlashes = () => {
    axios
      .get(`http://localhost:4000/api/user/${context.id}/flashes`, {
        timeout: 5000,
      })
      .then(res => {
        // console.log(res.data)
        setFlashes(res.data)
        if (selectedItem === 'all') setShowFlashes(res.data)
      })
      .catch(err => console.error(err))
  }
  const [show, setShow] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    const handleClick = () => setShow(false)
    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [show])

  useEffect(() => getFlashes(), [])

  // const ref = useRef(null)
  const handleContextMenu = (event: any) => {
    event.preventDefault()
    // console.log("ref ===",ref.current)
    // console.log("document===",document.getElementById(event.currentTarget))
    // console.log('event===', event.currentTarget.id)
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
    console.log('edit clicked', id, selectedFlash)
    navigate(`/edit`, { state: selectedFlash })
  }

  const [selectedItem, setSelectedItem] = useState('all')

  const handleFilter = () => {
    console.log('filtering', selectedItem)
    if (selectedItem === 'all') {
      setShowFlashes(flashes)
    } else {
      setShowFlashes(flashes.filter(flash => flash.tag === selectedItem))
    }
  }
  const handleLoadMoreFlashes = (event: any) => {
    event.preventDefault()
    console.log('lading till..')
  }

  return (
    <>
      <img className="fixed z-[-1] mt-10 h-screen w-screen border-2" src={backdrop} alt="test" />
      <div className="fixed left-[42%] z-[3] mt-2 flex items-start justify-center">
        <DropDown
          tailwind="border-4 border-transparent shadow-lg py-2 px-8 rounded-md
          bg-white/[0.8] hover:border-4 hover:border-black/[0.5] font-[500] text-black/[0.8] capitalize"
          onChange={(event: any) => setSelectedItem(event.target.value)}
          defaultValue="all">
          <option value="all" key="all" className="font-[500] capitalize text-black">
            all
          </option>
          {flashes
            .map(flash => flash.tag)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map(tag => (
              <option id={tag} key={tag} value={tag} className="font-[500] capitalize text-black">
                {tag}
              </option>
            ))}
        </DropDown>
        <ClearButton
          tailwind="py-2.5 px-7 mx-2 bg-white/[0.8] shadow-lg
          border-4 border-transparent hover:border-4 hover:border-black/[0.5]"
          onClick={handleFilter}>
          Filter
        </ClearButton>
      </div>
      <div className="fixed right-8 bottom-5 z-[2] ">
        <Button text="Add Flash" onClick={handleNewFlash} />
      </div>
      <div className="flex justify-center ">
        <ul
          className={`mx-4 my-4 mt-[90px] mb-5 grid min-w-[25rem] max-w-[70rem] grid-cols-2 gap-4
          rounded-xl border bg-white/[0.7] p-4 backdrop-blur-lg md:grid-cols-3`}>
          {showFlashes?.map(flash => (
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
      {flashes.length >= 90 ? (
        <div className=" mb-[10%] flex items-start justify-center">
          <Button text="Load More Flashes" onClick={handleLoadMoreFlashes}></Button>
        </div>
      ) : null}
      {show && (
        <ContextMenu>
          <ClearButton color="text-red-600" size="text-lg" onClick={handleDelete}>
            Delete
          </ClearButton>
          <ClearButton size="text-lg" onClick={handleEdit}>
            Edit
          </ClearButton>
        </ContextMenu>
      )}
    </>
  )
}

export default ProfilePage

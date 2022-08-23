import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NewFlashCard from '../components/NewFlashCard'
import { myContext } from '../Context'

const backdrop = require('../assets/backdrop.jpg')
const EditFlashPage = () => {
  const { state }: any = useLocation()
  // console.log('selectedFlash', state)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  })
  const context: any = useContext(myContext)

  const navigate = useNavigate()
  const handleSubmit = (event: any) => {
    console.log('clicked on submit button')
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const actualData = {
      flashId: state.id,
      question: data.get('question') || state.question,
      answer: data.get('answer') || state.answer,
      tag: data.get('tag') || state.tag,
      flashColor: data.get('flashColor') || state.flashColor,
    }
    // console.log(actualData)
    if (actualData.question && actualData.answer && context) {
      // console.log(actualData)
    

      try {
        setIsLoading(true)
        axios
          .put(`http://localhost:4000/api/flash/edit`, actualData, {
            withCredentials: true,
          })
          .then(res => {
            // console.log('res===', res.data.status)
            setError({
              msg: res.data.msg,
              status: true,
              type: res.data.status,
            })
          })
          .catch(err => console.log('err===', err))
          .finally(() => console.log('done===', setIsLoading(false)));

        console.log('type===', error)
      } catch (error) {
        setError({
          status: true,
          msg: error as string,
          type: 'error',
        })
      }

      if (error.type !== 'error') {
        console.log('navigating')
        navigate('/')
      }
    } else {
      setError({
        status: true,
        msg: 'Please provide a question or answer',
        type: 'error',
      })
    }
  }

  const fillForm = () => {
    ;(document.getElementById('question') as HTMLInputElement).value = state.question
    ;(document.getElementById('answer') as HTMLInputElement).value = state.answer
    ;(document.getElementById('tag') as HTMLInputElement).value = state.tag
  }

  const [formData, setFormData] = useState(state)
  const [color, setColor] = useState('bg-white')

  useEffect(() => {
    if (state.flashColor === '#fff1cc') {
      setColor('bg-[#fff1cc]')
    } else if (state.flashColor === '#dbffcc') {
      setColor('bg-[#dbffcc]')
    } else if (state.flashColor === '#cce5ff') {
      setColor('bg-[#cce5ff]')
    } else if (state.flashColor === '#ffcccc') {
      setColor('bg-[#ffcccc]')
    } else {
      setColor('bg-[#ffffff]')
    }
    setFormData(state)
  }, [state])

  useEffect(() => fillForm())

  return (
    <>
      <img className="fixed z-[-1] mt-10 h-screen w-screen border-2" src={backdrop} alt="test" />

      <div
        className="item-center mx-auto flex h-screen justify-center
        transition-all duration-500 ease-in-out ">
        <div className="mt-[5%]">
          <NewFlashCard
            onHandleSubmit={handleSubmit}
            title="Edit flash card"
            buttonText="Update flash card"
            formData={formData}
            flashColor={color}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  )
}

export default EditFlashPage

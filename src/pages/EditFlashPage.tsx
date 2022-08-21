import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NewFlashCard from '../components/NewFlashCard'

const EditFlashPage = () => {
  const { state }: any = useLocation()
  // console.log('selectedFlash', state)
  const handleSubmit = (event: Event) => {
    event.preventDefault()
    console.log('submitted')
  }

  const fillForm = () =>{
    (document.getElementById("question") as HTMLInputElement).value = state.question;
    (document.getElementById("answer") as HTMLInputElement).value = state.answer;
    (document.getElementById("tag") as HTMLInputElement).value = state.tag;
  }

  const [formData, setFormData] = useState(state)
  const [color,setColor] = useState("bg-white")

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

    fillForm()
  }, [state])

  return (
    <>
      <div className="bg-slate-100 item-center mx-auto flex justify-center transition-all duration-500 ease-in-out">
        <NewFlashCard
          onHandleSubmit={handleSubmit}
          title="Edit flash card"
          buttonText="Update flash card"
          formData={formData}
          flashColor={color}
        />
      </div>
    </>
  )
}

export default EditFlashPage

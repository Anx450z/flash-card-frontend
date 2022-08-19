import axios from 'axios'
import { useState, useContext } from 'react'
import NewFlashCard from '../components/NewFlashCard'
import { myContext } from '../Context'

const NewFlashPage = () => {

  const context: any = useContext(myContext)
  
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (event: any) => {
    console.log("clicked on submit button")
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const actualData = {
      question: data.get('question'),
      answer: data.get('answer'),
      tag: data.get('tag'),
      flashColor: data.get('flashColor')
    }
    console.log(actualData)
    if (actualData.question && actualData.answer && context) {
      console.log(actualData)
      try {
        axios
          .post(`http://localhost:4000/api/user/${context.id}/newflash`, actualData, {
            withCredentials: true,
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      } catch (error) {
        setError({
          status: true,
          msg: error as string,
          type: 'error',
        })
      }
    } else {
      setError({
        status: true,
        msg: 'Please provide a question or answer',
        type: 'error',
      })
    }
  }

  return (
    <>
      <div className="flex mx-auto justify-center item-center transition-all duration-500 ease-in-out">
        <NewFlashCard onHandleSubmit={handleSubmit} error={error}/>
      </div>
    </>
  )
}

export default NewFlashPage

import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NewFlashCard from '../components/NewFlashCard'
import { myContext } from '../Context'

const NewFlashPage = () => {
  const navigate = useNavigate()

  const context: any = useContext(myContext)

  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (event: any) => {
    console.log('clicked on submit button')
    event.preventDefault()

    const data = new FormData(event.currentTarget) 
    const actualData = {
      question: data.get('question'),
      answer: data.get('answer'),
      tag: data.get('tag'),
      flashColor: data.get('flashColor'),
    }
    console.log(actualData)
    if (actualData.question && actualData.answer && context) {
      console.log(actualData)
      try {
        axios
          .post(`http://localhost:4000/api/user/${context.id}/newflash`, actualData, {
            withCredentials: true,
          })
          .then(res => {
            console.log('res===', res.data.status)
            setError({
              msg : res.data.msg,
              status : true,
              type: res.data.status
            })
          })
          .catch(err => console.log('err===', err))

        console.log("type===",error)
        
      } catch (error) {
        setError({
          status: true,
          msg: error as string,
          type: 'error',
        })
      }

      if (error.type !== 'error') {
        console.log("navigating")
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

  return (
    <>
      <div className="bg-slate-100 item-center mx-auto flex justify-center transition-all duration-500 ease-in-out">
        <NewFlashCard onHandleSubmit={handleSubmit} error={error} flashColor="bg-white"/>
      </div>
    </>
  )
}

export default NewFlashPage

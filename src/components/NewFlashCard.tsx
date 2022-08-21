import React, { useState } from 'react'
import { TextField } from './common/TextField'
import { Label } from './common/Label'
import { Card } from './common/Card'
import Button from './common/Button'
import TextArea from './common/TextArea'
import ColorSelectionButton from './common/ColorSelectionButton'

const NewFlashCard = (props: any) => {
  const [color, setColor] = useState({
    backgroundColor: "",
    color: '#ffffff',
  })
  const handleffffff = (event: any) => {
    event.preventDefault()
    setColor({
      backgroundColor: 'bg-[#ffffff]',
      color: '#ffffff',
    })
  }
  const handlefff1cc = (event: any) => {
    event.preventDefault()
    setColor({
      backgroundColor: 'bg-[#fff1cc]',
      color: '#fff1cc',
    })
  }
  const handledbffcc = (event: any) => {
    event.preventDefault()
    setColor({
      backgroundColor: 'bg-[#dbffcc]',
      color: '#dbffcc',
    })
  }
  const handleffcccc = (event: any) => {
    event.preventDefault()
    setColor({
      backgroundColor: 'bg-[#ffcccc]',
      color: '#ffcccc',
    })
  }
  const handlecce5ff = (event: any) => {
    event.preventDefault()
    setColor({
      backgroundColor: 'bg-[#cce5ff]',
      color: '#cce5ff',
    })
  }

  const [textQuestion, setTextQuestion] = useState('')
  const [textAnswer, setTextAnswer] = useState('')

  const handleQuestion = (event: any) => {
    setTextQuestion(event.currentTarget.value)
  }
  const handleAnswer = (event: any) => {
    setTextAnswer(event.currentTarget.value)
  }

  // console.log("formdata", props.formData)

  return (
    <Card color={color.backgroundColor || props.flashColor}>
      <form className="space-y-6" onSubmit={props.onHandleSubmit} id="flash-form">
        <h3 className="text-xl font-medium text-black/[0.7]">{props.title || 'Create a new flash'}</h3>
        <div>
          <div className="flex items-start justify-between">
            <Label>Your Question</Label>
            <Label tailwind="text-xs text-black/[0.5] font-[700]">
              Characters left : {127 - textQuestion.length}
            </Label>
          </div>
          <TextArea id="question" name="question" onChange={handleQuestion} value={textQuestion}>
            Boiling point of water
          </TextArea>
        </div>
        <div>
          <div className="flex items-start justify-between">
            <Label>Your Answer</Label>
            <Label tailwind="text-xs text-black/[0.5] font-[700]">
              Characters left : {255 - textAnswer.length}
            </Label>
          </div>
          <TextArea id="answer" name="answer" onChange={handleAnswer} value={textAnswer}>
            100 degrees celsius
          </TextArea>
        </div>
        <div>
          <Label>Tag</Label>
          <TextField type="text" id="tag" name="tag">
            Science
          </TextField>
        </div>
        <div>
          <Label>Background color</Label>
        </div>
        <div className="flex items-start justify-evenly px-20">
          <ColorSelectionButton color={'#ffffff'} onClick={handleffffff}/>
          <ColorSelectionButton color={'#fff1cc'} onClick={handlefff1cc} />
          <ColorSelectionButton color={'#dbffcc'} onClick={handledbffcc} />
          <ColorSelectionButton color={'#ffcccc'} onClick={handleffcccc} />
          <ColorSelectionButton color={'#cce5ff'} onClick={handlecce5ff} />
        </div>
        <input id="flashColor" name="flashColor" type="hidden" value={color.color}></input>
        <Button
          type="expanded"
          text={props.buttonText || 'Add new Flash'}
          isLoading={props.isLoading}
        />
      </form>
    </Card>
  )
}

export default NewFlashCard

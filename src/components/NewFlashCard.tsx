import React, { useState } from 'react'
import { TextField } from './common/TextField'
import { Label } from './common/Label'
import { Card } from './common/Card'
import Button from './common/Button'
import TextArea from './common/TextArea'
import ColorSelectionButton from './common/ColorSelectionButton'

const NewFlashCard = (props: any) => {
  const [color, setColor] = useState({
    backgroundColor: 'bg-[#ffffff]',
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

  return (
    <Card color={color.backgroundColor}>
      <form className="space-y-6" onSubmit={props.onHandleSubmit} id="new-flash-form">
        <h3 className="text-xl font-medium text-gray-900">Create a new flash</h3>
        <div>
          <Label>Your Question</Label>
          <TextArea id="question" name="question">
            Boiling point of water
          </TextArea>
        </div>
        <div>
          <Label>Your Answer</Label>
          <TextArea id="answer" name="answer">
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
          <Label>Flash background color</Label>
        </div>
        <div className="flex justify-evenly items-start px-20">
          <ColorSelectionButton color={'#ffffff'} onClick={handleffffff} />
          <ColorSelectionButton color={'#fff1cc'} onClick={handlefff1cc} />
          <ColorSelectionButton color={'#dbffcc'} onClick={handledbffcc} />
          <ColorSelectionButton color={'#ffcccc'} onClick={handleffcccc} />
          <ColorSelectionButton color={'#cce5ff'} onClick={handlecce5ff} />
        </div>
        <input id="flashColor" name="flashColor" type="hidden" value={color.color}></input>
        <Button type="expanded" text="Add new Flash" isLoading={props.isLoading} />
      </form>
    </Card>
  )
}

export default NewFlashCard

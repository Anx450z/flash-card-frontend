import React from 'react'
import { TextField } from './common/TextField'
import { Label } from './common/Label'
import { Card } from './common/Card'
import Button from './common/Button'
import TextArea from './common/TextArea'

const NewFlashCard = (props: any) => {
  return (
    <Card>
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
        <Button type="expanded" text="Add new Flash" isLoading={props.isLoading} />
      </form>
    </Card>
  )
}

export default NewFlashCard


import React from 'react'
import { Card } from './common/Card'
import { Label } from './common/Label'

const FlashCard = (props: {
  question: string
  answer: string
  tag: string
  flashColor: string
}) => {
  return (
    <Card>
      <Label>Question</Label>
      <Label>{props.question}</Label>
      <Label>Answer</Label>
      <Label>{props.answer}</Label>
      <Label>tag</Label>
      <Label>{props.tag}</Label>
    </Card>
  )
}

export default FlashCard

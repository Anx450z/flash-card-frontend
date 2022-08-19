import FlashTypes from '../types/FlashType'
import Button from './common/Button'
import { Label } from './common/Label'

const FlashCard = (props: FlashTypes) => {
  const flashColor = `bg-[${props.flashColor}]`
  console.log(flashColor, props.id)
  return (
    <div
      className={`shadow-xl border
        rounded-xl overflow-hidden ${flashColor}`}>
      <header className="bg-black/[0.1] p-2">this is header</header>
      <div className="p-4">
        <Label color="text-gray-400">Question</Label>
        <Label color="text-red-600" size="text-lg">
          {props.question}
        </Label>
        <Label color="text-gray-400">Answer</Label>
        <Label color="text-green-600" size="text-lg">
          {props.answer}
        </Label>
        <Label color="text-gray-400">tag</Label>
        <Label color="text-gray-600">{props.tag}</Label>
      </div>
      <footer className="bg-black/[0.1] px-4 py-2 flex items-start justify-between">
        <Label color="text-gray-600 ">{props.tag}</Label>
        <Button text="Flip" />
      </footer>
    </div>
  )
}

export default FlashCard

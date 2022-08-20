import { useEffect, useState } from 'react'
import FlashTypes from '../types/FlashType'
import Button from './common/Button'
import ClearButton from './common/ClearButton'
import FavoriteIcon from './common/FavoriteIcon'
import { Label } from './common/Label'

const FlashCard = (props: FlashTypes) => {
  const [style, setStyle] = useState(`bg-white shadow-xl border
                              rounded-xl overflow-hidden`)

  useEffect(() => {
    let color
    if (props.flashColor === '#fff1cc') {
      color = 'bg-[#fff1cc]'
    } else if (props.flashColor === '#dbffcc') {
      color = 'bg-[#dbffcc]'
    } else if (props.flashColor === '#cce5ff') {
      color = 'bg-[#cce5ff]'
    } else if (props.flashColor === '#ffcccc') {
      color = 'bg-[#ffcccc]'
    } else {
      color = 'bg-[#ffffff]'
    }
    setStyle(`${color} shadow-xl border
      rounded-xl overflow-hidden`)
  }, [props.flashColor])

  return (
    <div className={style}>
      <header className="bg-black/[0.1] p-2 flex items-start justify-between">
        {new Date(props.updatedAt || props.createdAt).toString().slice(0, 15)}
        <div className="flex items-start justify-between">
          <FavoriteIcon />
          <ClearButton size="text-xl2" text="font-[900]">. . .</ClearButton>
        </div>
      </header>
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
        <input id="flashId" name="flashId" type="hidden" value={props.id}></input>
      </footer>
    </div>
  )
}

export default FlashCard

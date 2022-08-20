import { useEffect, useState } from 'react'
import FlashTypes from '../types/FlashType'
import ClearButton from './common/ClearButton'
import FavoriteIcon from './common/FavoriteIcon'
import { Label } from './common/Label'

const FlashCard = (props: FlashTypes) => {
  const [style, setStyle] = useState(`bg-white shadow-xl border
                              rounded-xl overflow-hidden`)

  const [flip, setFlip] = useState(false)

  const handleFlip = () => {
    setFlip(!flip)
    // console.log("flipped", flip)
  }

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
    setStyle(`${color}  border
      rounded-xl overflow-hidden transition-all duration-500 ease-in-out`)

    
  }, [props.flashColor])

  return (
    <div className={style}>
      <header className=" flex items-start justify-between p-2">
        <Label tailwind="text-xs text-gray-500">
          {new Date(props.updatedAt || props.createdAt).toString().slice(0, 15)}
        </Label>
        <div className="flex items-start justify-between">
          <FavoriteIcon favorite={props.favorite} />
          <ClearButton size="text-xl2" text="font-[900]" tailwind=" px-2 py-0">
            . . .
          </ClearButton>
        </div>
      </header>
      <div className="p-4 ">
        {flip ? (
          <>
            <Label color="text-gray-400">Answer</Label>
            <Label color="text-green-600" size="text-lg">
              {props.answer}
            </Label>
          </>
        ) : (
          <>
            <Label color="text-gray-400">Question</Label>
            <Label color="text-red-600" size="text-lg">
              {props.question}
            </Label>
          </>
        )}

        {/* <Label color="text-gray-400">tag</Label>
        <Label color="text-gray-600">{props.tag}</Label> */}
      </div>
      <footer className="flex items-start justify-between bg-black/[0.05] px-4 py-2">
        <Label color="text-gray-600 " tailwind="mt-2 capitalize">{props.tag}</Label>
        <ClearButton onClick={handleFlip} tailwind="px-4 py-2">Flip</ClearButton>
        <input id="flashId" name="flashId" type="hidden" value={props.id}></input>
      </footer>
    </div>
  )
}

export default FlashCard

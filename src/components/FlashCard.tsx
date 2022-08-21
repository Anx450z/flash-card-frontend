import axios from 'axios'
import { useEffect, useState } from 'react'
import FlashTypes from '../types/FlashType'
import ClearButton from './common/ClearButton'
import FavoriteIcon from './common/FavoriteIcon'
import { Label } from './common/Label'

const FlashCard = (props: FlashTypes) => {
  const [style, setStyle] = useState(`bg-white shadow-sm border hover:shadow-2xl
                              rounded-xl overflow-hidden transition-all duration-500 ease-in-out`)

  const [flip, setFlip] = useState(false)

  const handleFlip = () => {
    setFlip(!flip)
    // console.log("flipped", flip)
  }

  const [isFav, setIsFav] = useState(props.favorite)

  const handleFavorite = () => {
    setIsFav(!isFav)
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
    setStyle(`${color}  border hover:shadow-2xl
      rounded-xl overflow-hidden transition-all duration-500 ease-in-out`)

      axios
      .patch(
        'http://localhost:4000/api/flash/favorite',
        {
          flashId: props.id,
          favorite: isFav,
        },
        { withCredentials: true }
      )
      .catch(err => console.error(err))
  }, [props.flashColor, isFav])

  return (
    <div className={style}>
      <header className=" flex items-start justify-between p-2">
        <Label tailwind="text-xs text-black/[0.4] hover:text-black">
          {new Date(props.updatedAt || props.createdAt).toString().slice(0, 15)}
        </Label>
        <div className="flex items-start justify-between">
          <FavoriteIcon favorite={isFav} onClick={handleFavorite} />
          <ClearButton
            size="text-xl2"
            text="font-[900]"
            tailwind=" px-2 py-0 text-black/[0.4] hover:text-black">
            . . .
          </ClearButton>
        </div>
      </header>
      <div className="p-4 ">
        {flip ? (
          <>
            <Label color="text-gray-600">Answer</Label>
            <Label color="text-green-600" size="text-lg">
              {props.answer}
            </Label>
          </>
        ) : (
          <>
            <Label color="text-gray-600">Question</Label>
            <Label color="text-red-600" size="text-lg">
              {props.question}
            </Label>
          </>
        )}
      </div>
      <footer className="flex items-start justify-between bg-black/[0.05] px-4 py-2">
        <Label color="text-gray-600 " tailwind="mt-2 capitalize">
          {props.tag}
        </Label>
        <ClearButton onClick={handleFlip} tailwind="px-4 py-2 text-black/[0.2] hover:text-black">
          Flip
        </ClearButton>
        <input id="flashId" name="flashId" type="hidden" value={props.id}></input>
      </footer>
    </div>
  )
}

export default FlashCard

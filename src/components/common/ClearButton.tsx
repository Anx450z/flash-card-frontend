import React from 'react'

const ClearButton = (props: any) => {
  return (
    <label
      className={`block rounded-md p-1 font-medium transition-all duration-500 ease-in-out
        ${props.color ? props.color : 'text-gray-900'}
        ${props.size ? props.size : 'text-sm'} hover:bg-black/[0.1]
        ${props.text} ${props.tailwind}`}
      onClick={props.onClick}>
      {props.children}
    </label>
  )
}

export default ClearButton

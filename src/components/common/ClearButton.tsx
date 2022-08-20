import React from 'react'

const ClearButton = (props: any) => {
  return (
    <label
      className={`p-1 rounded-md block font-medium
       ${props.color ? props.color : 'text-gray-900'}
        ${props.size ? props.size : 'text-sm'} hover:bg-black/[0.1]
        ${props.text}`}
      onClick={props.onClick}>
      {props.children}
    </label>
  )
}

export default ClearButton

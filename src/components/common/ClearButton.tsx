import React from 'react'

const ClearButton = (props: any) => {
  return (
    <label
      className={` my-2 mx-0 block font-medium
       ${props.color ? props.color : 'text-gray-900'}
                        ${props.size ? props.size : 'text-sm'} hover:bg-blue-600 hover:text-white`}
      onClick={props.onClick}>
      {props.children}
    </label>
  )
}

export default ClearButton

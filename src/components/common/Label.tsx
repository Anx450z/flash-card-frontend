import React from 'react'

export const Label = (props: any) => {
  return (
    <label
      className={` font-medium block mb-2
        ${props.color ? props.color : "text-gray-900"}
        ${props.size ? props.size : "text-sm"} ${props.tailwind}`}>
      {props.children}
    </label>
  )
}

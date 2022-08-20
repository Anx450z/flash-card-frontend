import React from 'react'

export const TextField = (props: any) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className="block w-full
        rounded-lg border border-gray-300 bg-gray-50/[0.5]
          p-2.5 text-gray-900 focus:border-blue-500
          focus:ring-blue-500 sm:text-sm"
      placeholder={props.children}
    />
  )
}

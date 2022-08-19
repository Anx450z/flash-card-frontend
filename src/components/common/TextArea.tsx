import React from 'react'

const TextArea = (props: any) => {
  return (
    <textarea
      rows={5}
      cols={5}
      name={props.name}
      id={props.id}
      className="bg-gray-50/[0.5] border
          border-gray-300 text-gray-900 sm:text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block
            w-full p-2.5"
      placeholder={props.children}
    />
  )
}

export default TextArea
import React from 'react'

const TextArea = (props: any) => {
  return (
    <textarea
      rows={5}
      cols={5}
      required
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      className="block w-full
          rounded-lg border border-gray-300 bg-gray-50/[0.5]
          p-2.5 text-gray-900 focus:border-blue-500
            focus:ring-blue-500 sm:text-sm"
      placeholder={props.children}
      value={props.text}
      wrap="soft"
    />
  )
}

export default TextArea

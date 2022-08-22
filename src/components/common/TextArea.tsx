import React from 'react'

const TextArea = (props: any) => {
  return (
    <textarea
      rows={3}
      cols={5}
      required
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      className="block w-full
          rounded-lg border-4 border-black/[0.1] bg-white/[0.5]
          p-2.5 text-black/[0.8] focus:border-blue-500
            focus:ring-blue-500 text-md font-[500] hover:border-black/[0.5]"
      placeholder={props.children}
      value={props.text}
      wrap="soft"
    />
  )
}

export default TextArea

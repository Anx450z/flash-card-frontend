import React from 'react'

const ContextMenu = (props: any) => {
  return (
    <div className="fixed w-screen h-screen bg-black/[0.6] flex justify-center z[1] top-0 overflow-hidden">
      <div
        className={`absolute z-[2] m-4 w-[8rem] top-[30%]
    cursor-context-menu rounded-lg border border-gray-200 bg-white p-1 text-center
    font-[500] capitalize shadow-xl hover:bg-indigo-200`}>
        Edit
      </div>
    </div>
  )
}

export default ContextMenu

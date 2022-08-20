import React from 'react'
import { Label } from './common/Label'

const ContextMenu = (props: any) => {
  return (
    <div className="fixed w-screen h-screen flex justify-center top-0 overflow-hidden">
      <div
        className={`absolute z-[2] w-[8rem] top-[35%]
    cursor-context-menu rounded-lg border border-gray-200 bg-white text-center
    font-[500] capitalize shadow-xl ${props.index} `}>
        <Label color="text-gray-600" size="text-lg">Options</Label>
        <hr></hr>
        {props.children}
      </div>
    </div>
  )
}

export default ContextMenu

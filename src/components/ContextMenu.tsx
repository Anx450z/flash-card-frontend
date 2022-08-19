import React from 'react'

const ContextMenu = (props:any) => {
  console.log(props.position.x, props)

return <div className={`bg-white absolute m-4 w-[8rem] shadow-xl border
border-gray-200 rounded-lg p-1 text-center capitalize font-[500] z-[1]
hover:bg-indigo-200 cursor-context-menu ${props.position.x} ${props.position.y} `}>
  Edit
</div>
}

export default ContextMenu
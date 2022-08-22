import React from 'react'

const DropDown = (props :any) => {
  return (
    <>
      <select className={` ${props.tailwind}`}>
        {props.children}
      </select>
    </>
  )
}

export default DropDown

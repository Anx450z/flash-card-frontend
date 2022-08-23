import React from 'react'

const DropDown = (props :any) => {
  return (
    <>
      <select 
      className={` ${props.tailwind}`} 
      onChange={props.onChange}
      defaultValue={props.defaultValue}>
        {props.children}
      </select>
    </>
  )
}

export default DropDown

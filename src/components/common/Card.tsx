import React, { useEffect, useState } from 'react'

export const Card = (props: any) => {
  const [color, setColor] = useState("bg-[white]")

  useEffect(() => {
    setColor(props.color)
  },[props.color])
  
  const style = `m-4 min-w-[28rem] ${color} shadow-sm border hover:shadow-xl
                border-gray-200 rounded-xl max-w-sm p-4 sm:p-6 lg:p-8`
  return <div className={style}>{props.children}</div>
}
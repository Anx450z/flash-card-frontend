import React, { useEffect, useState } from "react";

function ColorSelectionButton(props: any) {
 
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    let color
    if (props.color === '#fff1cc') {
      color = 'bg-[#fff1cc]'
    } else if (props.color === '#dbffcc') {
      color = 'bg-[#dbffcc]'
    } else if (props.color === '#cce5ff') {
      color = 'bg-[#cce5ff]'
    } else if (props.color === '#ffcccc') {
      color = 'bg-[#ffcccc]'
    } else {
      color = 'bg-[#ffffff]'
    }
    setColor(`${color} shadow-xl border
      rounded-xl overflow-hidden`)
  }, [props.color])


  return (
    <>
      <button
        className={`rounded-full ${color} border border-solid px-4 py-4
        focus:ring-8 focus:ring-blue-600`}
        onClick={props.onClick}
        disabled={props.disabled}>
      </button>
    </>
  );
}

export default ColorSelectionButton;
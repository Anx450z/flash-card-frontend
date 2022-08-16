import React, { useEffect, useState } from "react";
import { CircularLoading } from "./CircularLoading";

function Button(props: any) {
  let style = `text-white bg-blue-700 hover:bg-blue-800'
              font-medium rounded-lg text-m px-5 py-2 text-center md:ml-8
              hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`;
  if (props.type === "expanded") {
    style = `w-full text-white bg-blue-700 hover:bg-blue-800' 
            font-medium rounded-lg text-m px-5 py-2 text-center
            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`;
  }

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.isLoading) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.isLoading]);

  return (
    <>
      <button
        className={props.isLoading ? (style += " cursor-wait") : style}
        onClick={props.onClick}
        disabled={disabled}>
        {props.isLoading ? <CircularLoading /> : ""}
        {props.isLoading ? "Loading..." : props.text}
      </button>
    </>
  );
}

export default Button;
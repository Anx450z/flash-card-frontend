import React, { useEffect, useState } from "react";
import { CircularLoading } from "./CircularLoading";

function Button(props: any) {
  let style = `text-black bg-black/[0.1] hover:bg-white/[0.5] hover:shadow-lg
              font-medium rounded-lg text-m px-5 py-2 text-center md:ml-8
              focus:ring-4 focus:ring-black/[0.3] backdrop-blur-lg`;
  if (props.type === "expanded") {
    style = `w-full text-black bg-black/[0.1] hover:bg-white/[0.5] hover:shadow-lg
            font-medium rounded-lg text-m px-5 py-2 text-center 
            focus:ring-4 focus:ring-black/[0.3] backdrop-blur-lg mt-2`;
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
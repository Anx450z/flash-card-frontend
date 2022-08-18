import React from "react";

export const Label = (props:any) => {
  return (
    <label className="text-sm font-medium text-gray-900 block mb-2">
      {props.children}
    </label>
  );
};
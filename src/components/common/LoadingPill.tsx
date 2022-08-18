import React from "react";
import { CircularLoading } from "./CircularLoading";

export const LoadingPill = () => {
  return (
    <div className="flex mx-auto justify-center item-center">
      <div className="mt-[50vh] bg-gray-600 rounded-lg px-5 py-2.5 text-white flex">
        <CircularLoading /> loading...
      </div>
    </div>
  );
};
import React from 'react'

const FavoriteIcon = (props :any) => {
  return (
    <div>
      <svg
        className="mr-4 inline-block h-6 w-6 text-white"
        viewBox="0 0 450 550"
        fill={props.favorite ? "red" : "none" }
        stroke='gray'
        strokeWidth="40"
        >
        
        <path
          d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.383-60.399-46.92-99.132-46.92
          C57.586,10.346,0,67.931,0,138.714c0,55.426,33.049,119.535,98.23,190.546c50.162,54.649,104.729,96.96,120.257,108.626l9.01,6.769
          l9.009-6.768c15.53-11.667,70.099-53.979,120.26-108.625C421.95,258.251,455,194.141,455,138.714
          C455,67.931,397.414,10.346,326.632,10.346z"
        />
      </svg>
    </div>
  )
}

export default FavoriteIcon

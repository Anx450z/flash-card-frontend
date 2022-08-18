import React from 'react'

export const Card = (props: any) => {
  const style = `md:mt-[100px] mt-[250px] min-w-[27rem] bg-white shadow-xl border
                border-gray-200 rounded-xl max-w-sm p-4 sm:p-6 lg:p-8`
  return <div className={style}>{props.children}</div>
}
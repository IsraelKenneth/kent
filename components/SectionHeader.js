import React from 'react'
import "../app/globals.css"

const SectionHeader = ({title, brief}) => {
  return (
    <div  className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold uppercase leading-9 text-center text-gray-800 dark:text-gray-50 opacity-70">{title}</h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">{brief}</p>
    </div>


  )
}

export default SectionHeader
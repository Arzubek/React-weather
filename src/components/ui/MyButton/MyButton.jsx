import React from 'react'
import useContextHook from '../../../hook/useContextHook'
import clsx from 'clsx';

const MyButton = ({children, ...props}) => {
  const { mode } = useContextHook();
  return (
    <button {...props} className={clsx('shadow-dark px-3 py-2 rounded-xl' ,
    mode === "light" 
    ? "bg-white" 
    : "bg-[#4F4F4F] text-[#fff]"
    )}>{children}</button>
  )
}

export default MyButton
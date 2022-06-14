import React from 'react'

type buttonProps = {
  title: string
  onClick?: Function
  disable?: boolean
  className:string
}
const Button = ({ title, onClick, className }: buttonProps) => {
  
  return (
    <button
      className={className}
      onClick={(e) => {onClick?.(); e.preventDefault(); e.stopPropagation()}}
    >
      {title}
    </button>
  )
}

export default Button

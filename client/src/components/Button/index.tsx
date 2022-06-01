import React from 'react'

type buttonProps = {
  title: string
  onClick?: Function
  disable?: boolean
}
const Button = ({ title, onClick, disable }: buttonProps) => {
  return (
    <button
      className={disable ? 'button__disable' : 'button'}
      onClick={(e) => {e.preventDefault(); e.stopPropagation()}}
    >
      {title}
    </button>
  )
}

export default Button

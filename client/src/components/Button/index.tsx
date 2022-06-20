import React from 'react'
import { buttonProps } from '../../globalTypes';


const Button = ({ title, onClick, className }: buttonProps) => {

  return (
    <button
      className={className}
      onClick={(e) => { onClick?.(); e.preventDefault(); e.stopPropagation() }}
    >
      {title}
    </button>
  )
}

export default Button

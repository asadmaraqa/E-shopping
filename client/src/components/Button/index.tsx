import React from 'react'
import { ButtonProps } from '../../globalTypes';


const Button = ({ title, onClick, className }: ButtonProps) => {

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

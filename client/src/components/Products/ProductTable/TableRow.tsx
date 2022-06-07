import React from 'react'
import { productTypes } from '../../../globalTypes'

const TableRow = ({img,name,price,description,stock,sizes,variants,categories}:productTypes) => {
  return (
    <tr>
      <td><img src={`/images/${img}`} alt={name} width={100} /></td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{stock}</td>
      <td>{sizes}</td>
      <td>{variants}</td>
      <td>{categories}</td>
      <td><button>Delete</button></td>
      <td><button>Edit</button></td>
    </tr>
  )
}

export default TableRow
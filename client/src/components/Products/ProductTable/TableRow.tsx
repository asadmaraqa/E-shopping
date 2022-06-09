import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productTypes } from '../../../globalTypes'
import { deleteproduct, productDeleted } from '../../../redux/slices/products'

const TableRow = ({_id,img,name,price,description,stock,sizes,variants,categories}:productTypes) => {
  const dispatch=useDispatch()
  const handleDispatch=()=>{
    dispatch(deleteproduct(_id))
    dispatch(productDeleted(_id))
  }
  const navigate= useNavigate();
  
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
      <td><button onClick={handleDispatch}>Delete</button></td>

      <td><button onClick={()=> navigate("")}>Edit</button></td>
    </tr>
  )
}

export default TableRow
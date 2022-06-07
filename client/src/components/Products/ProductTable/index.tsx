import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, productTypes } from '../../../globalTypes'
import TableRow from './TableRow'

const ProductTable = () => {
  const porducts = useSelector((state: AppState) => state.products)

  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Stock</th>
        <th>Sizes</th>
        <th>Variants</th>
        <th>Categories</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
      {!porducts.loading && porducts.listAll.map((product: productTypes) =>
        <TableRow {...product} />
      )}
    </table>
  )
}

export default ProductTable
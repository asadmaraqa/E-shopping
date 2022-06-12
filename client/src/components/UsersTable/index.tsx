import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from './TableRow'

const UsersTable = () => {

  const users = useSelector((state: any) => state.users)
  
  return (
    <table>
      <tbody>

        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Second Name</th>
          <th>Email</th>
          <th>role</th>
          <th>Created at</th>
          <th>Updated at</th>
          <th>Banned</th>
          <th>Delete</th>
          <th>Edit</th>
          <th>Ban</th>
        </tr>
        {!users.loading && users.list.map((user: any) =>
          <>
            <TableRow {...user} key={user._id} />
          </>
        )}
      </tbody>

    </table>
  )
}

export default UsersTable
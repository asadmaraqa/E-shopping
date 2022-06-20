import axios from 'axios'
import { useEffect, useState } from 'react'

import { RBAC_RULES } from '../roles'


const check = (rules: any, role: string, action: string) => {
  const permissions = rules[role]
  if (!permissions) {
    return false
  }

  const staticPermissions = permissions.view
  if (staticPermissions && staticPermissions.includes(action)) {
    return true
  }
  const dynamicPermissions = permissions.actions
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions.includes(action)
    if (!permissionCondition) {
      return false
    }

    return true
  }
  return false
}

const Can = ({ perform, yes, no }: any) => {

  const [userRole, setUserRole] = useState('')
  const handleVerifyToken = async () => {
    const token = window.localStorage.getItem('myData') || ''
    if(token){
    const response = await axios.post(
      'http://localhost:5000/verify-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    setUserRole(response.data.user.role.toLowerCase())
  }}


  useEffect(() => {
    handleVerifyToken()
  }, [])


  return check(RBAC_RULES, userRole, perform) ? yes() : no()
  
}

Can.defaultProps = {
  yes: () => null,
  no: () => null,
  perform: '',
}

export default Can
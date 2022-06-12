import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import Can from '../components/can'
import { userAdded } from '../redux/slices/auth'
import jwtDecode from 'jwt-decode'
const Signin=()=> {
  const [token, setToken] = useState('')
  const dispatch= useDispatch()

  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential
    console.log(jwtDecode(tokenId))
    const res = await axios.post(
      'http://localhost:5000/google-login',
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    )
    const token = res.data.token
    setToken(token)

 
    if (token !=="")  localStorage.setItem('myData', token)
    const decoded:any = jwtDecode(token)
    dispatch(userAdded(decoded))

  }


  const clientId ='551702645705-33sjepdlepoekka1b5lvt13uccgbe3m3.apps.googleusercontent.com'

  const handleGetMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/products', {
      
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response)
    } catch (error: any) {
    }
  }
  return (
    <div className="App">

        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSucess} />
        </GoogleOAuthProvider>
        <Can role="user" perform="products:get" yes={()=> (<button
          
          onClick={handleGetMovies}
        >
          GET Products
        </button>)} />
       
    </div>
  )
}
export default Signin
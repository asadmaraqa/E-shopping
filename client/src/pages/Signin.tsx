import React, { useState } from 'react'
import axios from 'axios'

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

const Signin=()=> {
  const [token, setToken] = useState('')
  console.log('token:', token)
  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential
    console.log('tokenId:', tokenId)

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
    console.log(token)
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
      //console.log('response:', response.data)
    } catch (error: any) {
      //console.log('error:', error.response.data)
    }
  }
  return (
    <div className="App">

        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSucess} />
        </GoogleOAuthProvider>

        <button
          style={{ width: '200px', height: '80px', marginTop: '1rem' }}
          onClick={handleGetMovies}
        >
          GET Products
        </button>
    </div>
  )
}
export default Signin
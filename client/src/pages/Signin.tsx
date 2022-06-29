import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import AppBar from "../components/AppBar"

import { loadUsers, userAdded } from '../redux/slices/users'
import Footer from '../components/Footer'

const Signin = () => {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential

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

    if (token !== ""||token !== undefined) localStorage.setItem('myData', token)
    const decoded = jwtDecode(token)

      dispatch(userAdded(decoded))
    
    dispatch(loadUsers())
    navigate("/")

  }



  const clientId = '551702645705-33sjepdlepoekka1b5lvt13uccgbe3m3.apps.googleusercontent.com'

  return (
    <div className="page">
      <AppBar />
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={handleSucess} />
      </GoogleOAuthProvider>
      <Footer />

    </div>
  )
}
export default Signin
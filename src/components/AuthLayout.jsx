import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({children, authentication = true}) => {

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.status)
  useEffect(() => {
    if(authentication && authStatus !== authentication){
      navigate("/login")
    }else if(!authentication && authStatus !== authentication){
      navigate("/")
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])
  
  return (
    <div>AuthLayout</div>
  )
}

export default AuthLayout
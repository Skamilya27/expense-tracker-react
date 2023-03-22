import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Auth/Signup'
import Home from './Home'
import { AuthContext } from '../../context/AuthContext'
import Login from '../Auth/Login'
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage'

function AllRoutes() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={isLogin?<Login /> : <Signup />} />
      <Route path='/completeProfile' element={<CompleteProfilePage />} />
    </Routes>
  )
}

export default AllRoutes

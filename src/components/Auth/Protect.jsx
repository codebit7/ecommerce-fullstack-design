import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Protect = ({ requiredRole }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  if (!isAuthenticated || !user) {
    return <Navigate to='/auth/login' replace />
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to='/unauthorized' replace />
  }

  return <Outlet />
}

export default Protect

import React from 'react'
import { useAuth } from './AuthContext'

const Logout = () => {
    const { logout } = useAuth();
    logout();
    return (
        <Navigate to="/login" />
    )
}

export default Logout

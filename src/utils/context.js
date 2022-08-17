import React, { useContext, useEffect, useState } from "react"

export const AuthContext = React.createContext()

export function useUser() {
  return useContext(AuthContext)
}

function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const accessToken = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    if (accessToken) {
      setIsAuthenticated(true)
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = (userDetails) => {
    setUser(userDetails)
    setIsAuthenticated(true)
    console.log(userDetails, "userDetails")
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider

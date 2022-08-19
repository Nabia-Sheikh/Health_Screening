import React, { useContext, useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

export const AuthContext = React.createContext()

export function useUser() {
  return useContext(AuthContext)
}

function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const socket = useRef()
  const [onlineUsers, setOnlineUsers] = React.useState([])

  // useEffect(() => {
  //   socket.current = io("http://localhost:4000")
  //   socket.current.on("connect", () => {
  //     console.log("Connected to server")
  //   })
  //   socket.current.on("disconnect", () => {
  //     console.log("Disconnected from server")
  //   })
  // }, [])

  // useEffect(() => {
  //   if (user) {
  //     socket.current.emit("addUser", user._id)
  //     socket.current.on("getUsers", (users) => {
  //       setOnlineUsers(users)
  //     })
  //   }
  // }, [user])

  useEffect(() => {
    const accessToken = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    if (accessToken) {
      setIsAuthenticated(true)
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = (userDetails) => {
    setUser({
      ...userDetails,
      image: "https://api.lorem.space/image/face?w=150&h=150",
    })
    setIsAuthenticated(true)
    console.log(userDetails, "userDetails")
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        onlineUsers,
        setOnlineUsers,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider

import React, { useContext } from "react"
import AuthNav from "./Components/AuthNav"
import NavBar from "./Components/Navbar"
import DoctorsList from "./Screens/DoctorsList"
import HomeScreen from "./Screens/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import LoginScreen from "./Screens/LoginScreen"
import ResultHistory from "./Screens/ResultHistory"
import "./styles/App.css"
import { ChatProvider } from "./utils/ChatProvider"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "./utils/context"

const App = () => {
  const isAuthenticated = useContext(AuthContext).isAuthenticated
  return (
    <div className="main">
      <ChatProvider>
      <BrowserRouter>
        {isAuthenticated ? <AuthNav /> : <NavBar />}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/history" element={<ResultHistory />} />
          <Route path="/doctors" element={<DoctorsList />} />
        </Routes>
        </BrowserRouter>
      </ChatProvider>
    </div>
  )
}

export default App

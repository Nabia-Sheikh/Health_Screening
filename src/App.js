import React, { useContext } from "react"
import AuthNav from "./Components/AuthNav"
import NavBar from "./Components/Navbar"
import DoctorsList from "./Screens/DoctorsList"
import HomeScreen from "./Screens/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import LoginScreen from "./Screens/LoginScreen"
import ResultHistory from "./Screens/ResultHistory"
import "./styles/App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "./utils/context"
import ChatScreen from "./Screens/ChatScreen"
import ScreeningScreen from "./Screens/ScreeningScreen"
import ResultScreen from "./Screens/ResultScreen"

const App = () => {
  const isAuthenticated = useContext(AuthContext).isAuthenticated
  return (
    <div className="main">
      <BrowserRouter>
        {isAuthenticated ? <AuthNav /> : <NavBar />}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/screening" element={<ScreeningScreen />} />
          <Route path="/result" element={<ResultScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/history" element={<ResultHistory />} />
          <Route path="/chats" element={<ChatScreen />} />
          <Route path="/doctors" element={<DoctorsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

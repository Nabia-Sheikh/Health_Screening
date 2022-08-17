import React from "react"
import AuthNav from "./Components/AuthNav"
import NavBar from "./Components/Navbar"
import DoctorsList from "./Screens/DoctorsList"
import HomeScreen from "./Screens/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import ResultHistory from "./Screens/ResultHistory"
import "./styles/App.css"

const App = () => {
  return (
    <div className="main">
      {false ? <AuthNav /> : <NavBar />}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <HomeScreen /> */}
      {/* <ResultHistory /> */}
      <DoctorsList />
    </div>
  )
}

export default App

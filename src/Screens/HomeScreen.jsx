import React from 'react'
import Home from '../styles/Home.module.css'
const HomeScreen = () => {
  return (
    <div>
    <div className={Home.hero} />
      <div className={Home.heroText}>
        <h1>Welcome to the</h1>
        <h1>React Native Starter</h1>
        <p>
          This is a boilerplate for creating React Native apps using create-react-native-app.
        </p>
        </div>
    </div>
  )
}

export default HomeScreen
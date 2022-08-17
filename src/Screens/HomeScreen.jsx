import React from "react"
import { Button } from "react-bootstrap"
import Home from "../styles/Home.module.css"
const HomeScreen = () => {
  return (
    <>
      <div className={Home.hero} />
      <div className={Home.heroText}>
        <h1>Mental Health is Important!</h1>
        <p>You've to take care of it.</p>
        <Button variant="primary" size="lg" className={Home.button}>
          Track it!
        </Button>
      </div>
    </>
  )
}

export default HomeScreen

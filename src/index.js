import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import AuthContext from "./utils/context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContext>
    <App />
  </AuthContext>
)

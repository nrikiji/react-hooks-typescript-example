import React from "react"
import { useHistory } from "react-router-dom"
import useAuth from "../contexts/auth"

function Header() {
  const { state, dispatch } = useAuth()
  const history = useHistory()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("AUTH_TOKEN")
    history.push("/login")
  }

  return (
    <header>
      Header
      {state.user && <button onClick={handleLogout}>Logout</button>}
    </header>
  )
}

export default Header

import React, { SyntheticEvent, useState } from "react"
import useAuth from "../contexts/auth"
import { login } from "../repositories/auth"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { dispatch } = useAuth()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    try {
      const user = await login(email, password)
      localStorage.setItem("AUTH_TOKEN", user.token)
      dispatch({
        type: "LOAD_USER",
        user: user,
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login

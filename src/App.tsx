import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import { AuthProvider } from "./contexts/auth"
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import useAuth from "./contexts/auth"
import { getUser } from "./repositories/auth"

function App() {
  const { state, dispatch } = useAuth()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("AUTH_TOKEN")
      if (token) {
        const user = await getUser()
        dispatch({ type: "LOAD_USER", user: user })
      } else {
        dispatch({ type: "INITIALIZED" })
      }
    }
    loadUser()
  }, [dispatch])

  if (!state.initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/login"
          render={() => (state.user ? <Redirect to="/home" /> : <Login />)}
        />
        <PrivateRoute path="/home" component={Home} />
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
)

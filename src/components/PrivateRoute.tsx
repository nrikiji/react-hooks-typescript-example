import React from "react"
import { Redirect, Route } from "react-router-dom"
import useAuth from "../contexts/auth"

type PrivateRouteProps = {
  path: string
  component: any
}

export default function PrivateRoute({ path, component }: PrivateRouteProps) {
  const { state } = useAuth()
  if (state.user) {
    return <Route path={path} component={component} />
  } else {
    return <Redirect to="/login" />
  }
}

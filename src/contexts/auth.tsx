import React, {
  Dispatch,
  useReducer,
  createContext,
  PropsWithChildren,
  useContext,
} from "react"
import {
  AuthState,
  AuthAction,
  initialState,
  authReducer,
} from "../reducers/auth"

type AuthContextProps = {
  state: AuthState
  dispatch: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => initialState,
})

export function AuthProvider(props: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(authReducer, initialState)
  return <AuthContext.Provider value={{ state, dispatch }} {...props} />
}

export default function useAuth() {
  return useContext(AuthContext)
}

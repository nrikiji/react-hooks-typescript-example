import { User } from "./../types/user"

export type AuthAction =
  | {
      type: "INITIALIZED"
    }
  | {
      type: "LOGOUT"
    }
  | {
      type: "LOAD_USER"
      user: User
    }

export interface AuthState {
  initialized: boolean
  user: User | null
}

export const initialState: AuthState = {
  initialized: false,
  user: null,
}

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOAD_USER":
      return { user: action.user, initialized: true }
    case "LOGOUT":
      return { ...state, user: null }
    case "INITIALIZED":
      return { ...state, initialized: true }
  }
}

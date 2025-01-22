import { createContext, useReducer } from "react";

// Initial state for authentication
const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

// Create context
export const AuthContext = createContext(INITIAL_STATE);

// Reducer function to manage authentication state
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// Context provider to wrap your app
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

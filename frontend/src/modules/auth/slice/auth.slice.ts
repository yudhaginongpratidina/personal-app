// REDUX TOOLKIT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// INTERFACE FOR ACCOUNT
interface Account {
    id: string | number,
    email: string,
    password: string,
    role: string
}

// INTERFACE FOR AUTH STATE
interface AuthState {
    account: Account | null,
    isAuthenticated: boolean,
    isError: boolean
    message: string
}

// INITIAL STATE
const initialState: AuthState = {
    account: null,
    isAuthenticated: false,
    isError: false,
    message: ""
}

// CREATE SLICE
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<Account>) => {
            state.account = action.payload
            state.isAuthenticated = true
            state.isError = false
            state.message = "Logged in successfully"
        },
        loginFailure: (state) => {
            state.account = null
            state.isAuthenticated = false
            state.isError = true
            state.message = "Invalid email or password"
        },
        logout: (state) => {
            state.account = null
            state.isAuthenticated = false
            state.isError = false
            state.message = ""
        }
    }
})

// EXPORT
export const { loginSuccess, loginFailure, logout } = AuthSlice.actions
export default AuthSlice.reducer
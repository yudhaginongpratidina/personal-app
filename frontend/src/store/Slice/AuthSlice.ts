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
}

// INITIAL STATE
const initialState: AuthState = {
    account: null,
    isAuthenticated: false,
}

// CREATE SLICE
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<Account>) => {
            state.account = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.account = null
            state.isAuthenticated = false
        }
    }
})

// EXPORT
export const { loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
// REDUX TOOLKIT & PERSIST
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// SLICE
import AuthSlice from "@/modules/auth/slice/auth.slice"

// CONFIG PERSISTENCE
const AuthPersistedConfig = { key: 'auth', storage }
const persistedAuth = persistReducer(AuthPersistedConfig, AuthSlice)

// STORE
export const store = configureStore({
    reducer: {
        auth: persistedAuth,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// EXPORT
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
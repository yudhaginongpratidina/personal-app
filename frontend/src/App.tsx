// REACT LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import './assets/css/index.css'

import PortfolioView from './modules/portfolio/views/portfolio.view'

import LoginView from './modules/auth/views/login.view'
import RegisterView from './modules/auth/views/register.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/" element={<PortfolioView />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

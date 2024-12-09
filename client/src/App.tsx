import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import LoginView from '@/modules/auth/views/login.view'
import RegisterView from '@/modules/auth/views/register.view'

import DashboardPortfolioView from '@/modules/portfolio/views/dashboard_portfolio.view'
import CreatePortfolioView from '@/modules/portfolio/views/create_portfolio.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
 
                        <Route path='/dashboard/portfolio/' element={<DashboardPortfolioView />} />
                        <Route path='/dashboard/portfolio/create' element={<CreatePortfolioView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

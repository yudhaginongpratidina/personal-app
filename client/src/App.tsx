import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import LoginView from '@/modules/auth/views/login.view'
import RegisterView from '@/modules/auth/views/register.view'
import ForgetPasswordView from './modules/auth/views/forget_password.view'

import ProfileView from './modules/profile/views/profile.view'
import EditProfileView from './modules/profile/views/edit_profile.view'

import TablePortfolioView from './modules/portfolio/views/table_portfolio.view'
import CreatePortfolioView from '@/modules/portfolio/views/create_portfolio.view'
import EditPortfolioView from '@/modules/portfolio/views/edit_portfolio.view'

import NotFoundView from './modules/errors/views/not_found.view'
import MaintenanceView from './modules/errors/views/maintenance.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/forget-password" element={<ForgetPasswordView />} />
 
                        <Route path='/profile' element={<ProfileView />} />
                        <Route path='/profile/edit' element={<EditProfileView />} />

                        <Route path='/dashboard/portfolio' element={<TablePortfolioView />} />
                        <Route path='/dashboard/portfolio/create' element={<CreatePortfolioView />} />
                        <Route path='/dashboard/portfolio/edit' element={<EditPortfolioView />} />

                        <Route path="/maintenance" element={<MaintenanceView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

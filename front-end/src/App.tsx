import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import '@/assets/css/tailwind.css'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import LoginView from '@/views/auth/login.view'
import RegisterView from '@/views/auth/register.view'

import DashboardView from '@/views/dashboard/dashboard.view'
import IndexUserView from '@/views/dashboard/users/index.user.view'
import CreateUserView from '@/views/dashboard/users/create.user.view'
import EditUserView from '@/views/dashboard/users/edit.user.view'
import UpdateRoleUserView from '@/views/dashboard/users/update_role.user.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/dashboard/users" element={<IndexUserView />} />
                        <Route path="/dashboard/users/create" element={<CreateUserView />} />
                        <Route path="/dashboard/users/:id/edit" element={<EditUserView />} />
                        <Route path='/dashboard/users/:id/update-role' element={<UpdateRoleUserView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

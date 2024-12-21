import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import '@/assets/css/tailwind.css'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

// import DashboardView from '@/views/client/dashboard/index.client'
// import IndexUserView from '@/views/administrator/users/index.user.view'
// import CreateUserView from '@/views/administrator/users/create.user.view'
// import EditUserView from '@/views/administrator/users/edit.user.view'
// import UpdateRoleUserView from '@/views/administrator/users/update_role.user.view'

// CLIENT
import LoginClientView from './views/client/auth/login.client.view'
import RegisterClientView from './views/client/auth/register.client.view'
import DashboardClientView from './views/client/dashboard/index.client'

// ADMINISTRATOR
import LoginAdminView from '@/views/administrator/auth/login.admin.view'
import RegsiterAdminView from './views/administrator/auth/register.admin.view'
import DashboardAdminView from './views/administrator/dashboard/index.admin.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        {/* <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/dashboard/users" element={<IndexUserView />} />
                        <Route path="/dashboard/users/create" element={<CreateUserView />} />
                        <Route path="/dashboard/users/:id/edit" element={<EditUserView />} />
                        <Route path='/dashboard/users/:id/update-role' element={<UpdateRoleUserView />} />  */}

                        {/* CLIENT */}
                        <Route path='/x0DsZqJHrMIJ8do/login' element={<LoginClientView/>} />
                        <Route path='/x0DsZqJHrMIJ8do/register' element={<RegisterClientView/>} />
                        <Route path='/x0DsZqJHrMIJ8do/dashboard' element={<DashboardClientView/>} />

                        {/* ADMINISTRATOR */}
                        <Route path="/$2a$14$rVguT8OkWGWpUCh7YBizz.wQI7hazbul1kAn8DyQDw23G5Yp6Eytq" element={<LoginAdminView />} />
                        <Route path="/$2a$14$PhEQORJUtC1yPod3hcnWNOjBYobhufLqnqnJVKcUU43SbkL0d0Tm2" element={<RegsiterAdminView />} />
                        <Route path="/6Bgv0npTToaFgSeNsuuqvBcZrGLLGGmamppI8r" element={<DashboardAdminView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

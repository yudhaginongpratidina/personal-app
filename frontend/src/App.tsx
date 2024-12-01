// REACT LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// REDUX & PERSISTENCE
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

// ROUTING LIBRARY
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

// GLOBAL STYLING (TAILWIND CSS)
import './assets/css/index.css'

// VIEWS
import Home from './views/Home'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import Account from './views/Account'

import Project from './views/Project'
import CreateProject from './views/Project/Create'
import EditProject from './views/Project/Edit'
import DeleteProject from './views/Project/Delete'

// APP
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/project/create" element={<CreateProject />} />
                        <Route path="/project/edit/:id" element={<EditProject />} />
                        <Route path="/project/delete/:id" element={<DeleteProject />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

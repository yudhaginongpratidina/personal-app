// REACT LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import './assets/css/index.css'

// MODULE PORTFOLIO
import PortfolioView from './modules/portfolio/views/portfolio.view'

// MODULE AUTH
import LoginView from './modules/auth/views/login.view'
import RegisterView from './modules/auth/views/register.view'

// MODULE USER
import IndexUserView from './modules/users/views/index_users.view'

// MODULE CONTENT
import CreateContentView from './modules/contents/views/creata_content.view'

// IMPORT MODULE ERROR
import NotFoundView from './modules/errors/views/404.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        {/* PORTFOLIO */}
                        <Route path="/" element={<PortfolioView />} />
                        
                        {/* AUTH */}
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />

                        {/* USER */}
                        <Route path='/users' element={<IndexUserView />} />

                        {/* CONTENT */}
                        <Route path='/contents/create' element={<CreateContentView />} />

                        {/* ERROR */}
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

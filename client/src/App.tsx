import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './assets/css/global.css'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import LoginView from './views/auth/login.view'
import RegisterView from './views/auth/register.view'

import AdminView from './views/admin/admin.view'

import IndexPortfolioView from './views/admin/portfolio/index_portfolio.view'
import CreatePortfolioView from './views/admin/portfolio/create_portfolio.view'
import EditPortfolioView from './views/admin/portfolio/edit_portfolio.view'

import IndexSkillView from './views/admin/skill/index_skill.view'
import CreateSkillView from './views/admin/skill/create_skill.view'
import EditSkillView from './views/admin/skill/edit_skill.view'

import IndexUserView from './views/admin/user/index_user.view'
import CreateUserView from './views/admin/user/create_user.view'
import EditUserView from './views/admin/user/edit_user.view'

import IndexCategoryLearningPathView from './views/admin/learning_path/category/index_category_learning_path.view'
import CreateCategoryLearningPathView from './views/admin/learning_path/category/create_category_learning_path.view'
import EditCategoryLearningPathView from './views/admin/learning_path/category/edit_category_learning_path.view'

import IndexLevelLearningPathView from './views/admin/learning_path/level/index_level_learning_path.view'
import CreateLevelLearningPathView from './views/admin/learning_path/level/create_level_learning_path.view'
import EditLevelLearningPathView from './views/admin/learning_path/level/edit_level_learning_path.view'

import IndexLearningPathView from './views/admin/learning_path/index_learning_path.view'
import CreateLearningPathView from './views/admin/learning_path/create_learning_path.view'
import EditLearningPathView from './views/admin/learning_path/edit_learning_path.view'

import CreateMateriLearningPathView from './views/admin/learning_path/materi/create_materi_learning_path.view'
import EditMateriLearningPathView from './views/admin/learning_path/materi/edit_materi_learning_path.view'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        {/* AUTHENTICATION */}
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />

                        {/* ADMIN */}
                        <Route path="/admin" element={<AdminView />} />

                        {/* MANAGEMENT USER */}
                        <Route path="/admin/user" element={<IndexUserView />} />
                        <Route path="/admin/user/create" element={<CreateUserView />} />
                        <Route path="/admin/user/:id/edit" element={<EditUserView />} />

                        {/* MANAGEMENT PORTFOLIO */}
                        <Route path="/admin/portfolio" element={<IndexPortfolioView />} />
                        <Route path="/admin/portfolio/create" element={<CreatePortfolioView />} />
                        <Route path="/admin/portfolio/:id/edit" element={<EditPortfolioView />} />

                        {/* MANAGEMENT SKILL */}
                        <Route path="/admin/skill" element={<IndexSkillView />} />
                        <Route path="/admin/skill/create" element={<CreateSkillView />} />
                        <Route path="/admin/skill/:id/edit" element={<EditSkillView />} />

                        {/* MANAGEMENT LEARNING PATH - CATEGORY */}
                        <Route path='/admin/learning-path/category' element={<IndexCategoryLearningPathView />} />
                        <Route path='/admin/learning-path/category/create' element={<CreateCategoryLearningPathView />} />
                        <Route path='/admin/learning-path/category/:id/edit' element={<EditCategoryLearningPathView />} />

                        {/* MANAGEMENT LEARNING PATH - LEVEL */}
                        <Route path='/admin/learning-path/level' element={<IndexLevelLearningPathView />} />
                        <Route path='/admin/learning-path/level/create' element={<CreateLevelLearningPathView />} />
                        <Route path='/admin/learning-path/level/:id/edit' element={<EditLevelLearningPathView />} />

                        <Route path='/admin/larning-path' element={<IndexLearningPathView />} />
                        <Route path='/admin/larning-path/create' element={<CreateLearningPathView />} />
                        <Route path='/admin/larning-path/:id/edit' element={<EditLearningPathView />} />

                        {/* MANAGEMENT LEARNING PATH -  */}
                        <Route path='/admin/larning-path/:learning_Path_idid/materi/create' element={<CreateMateriLearningPathView />} />
                        <Route path='/admin/larning-path/:learning_Path_id/materi/:id/edit' element={<EditMateriLearningPathView />} />

                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)

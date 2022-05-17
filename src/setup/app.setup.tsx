import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '../auth/private-route'
import { IndexPage } from '../pages'
import { AboutPage } from '../pages/about'
import { LoginPage } from '../pages/login'
import { LogoutPage } from '../pages/logout'
import { PrivatePage } from '../pages/private'

const Setup = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="logout" element={<LogoutPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route
                    path="private"
                    element={
                        <PrivateRoute>
                            <PrivatePage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Setup

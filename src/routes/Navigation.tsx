import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {

    const renderNavLinks = routes.map(link => (
        <li key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{link.name}</NavLink>
        </li>
    ))

    const renderRoutes = routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
    ))

    return (
        <Suspense
            fallback={<div>Loading...</div>}
        >
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {renderNavLinks}
                        </ul>
                    </nav>

                    <Routes>
                        {renderRoutes}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}

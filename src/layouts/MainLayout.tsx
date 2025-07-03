import { Routes, Route } from 'react-router-dom';
import appRoutes from '../routes/routing';

const MainLayout = () => {
    return (
        <main className="min-h-screen">
            <Routes>
                {appRoutes.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                ))}
            </Routes>
        </main>
    )
}

export default MainLayout;
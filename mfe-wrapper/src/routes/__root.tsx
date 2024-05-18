import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '../styles.css';

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="nav-container">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                <Link to="/movies" className="[&.active]:font-bold">
                    Movies
                </Link>
                <Link to="/watchlist" className="[&.active]:font-bold">
                    Watchlist
                </Link>
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

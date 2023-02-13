import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { SessionService } from "../services/SessionService";

const AuthGuard = () => {
    const location = useLocation();
    let session = SessionService.getSessionFromStorage();

    return session ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} />
    );
};

export default AuthGuard;

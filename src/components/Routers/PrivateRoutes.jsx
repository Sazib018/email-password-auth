import React, { useContext } from 'react';
import { Context } from '../Providers/AuthContext';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, isLoader } = useContext(Context);
    const location = useLocation();

    if (isLoader) {
        return (
            <div className="flex justify-center items-center space-x-2">
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user && !isLoader) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoutes;

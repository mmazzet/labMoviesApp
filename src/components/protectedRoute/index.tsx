import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const ProtectedRoute = ({ children }: any) => {
    const { user } = useAuth();
    const location = useLocation();
    
    if (!user) {
        localStorage.setItem('redirectAfterLogin', location.pathname); 
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const OnlyAdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    console.log(user, loading);
    
    const [isAdmin, isAdminLoading]=useAdmin()



 const location=useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default OnlyAdminRoute;
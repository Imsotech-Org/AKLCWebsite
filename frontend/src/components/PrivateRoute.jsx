import { Navigate, Outlet } from "react-router-dom";
import {useAuthStatus} from '../hooks/useAuthStatus';

const PrivateRoute = () => {

    const {loggedIn, checking} = useAuthStatus();

    return loggedIn ? <Outlet /> : <Navigate to='/credentials' />
}

export default PrivateRoute
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  if (user.isAuthorized) {
    return <Navigate to="/user" state={{ from: location }} replace />;
  } else if (!user.isAuthorized) {
    return <Outlet />;
  }
};

export default PublicRoute;

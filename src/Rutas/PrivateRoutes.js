import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ isAllowed, redirectPath, children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoutes;

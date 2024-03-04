// ProtectedRoute.tsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from './auth';

// interface ProtectedRouteProps {
//   component: React.ComponentType<any>;
// }

const ProtectedRoute: React.FC = () => {
  const user = getUser();
console.log(user)
  return (
    user ? <Outlet/> : <Navigate to='/login'/>
    
  );
};

export default ProtectedRoute;

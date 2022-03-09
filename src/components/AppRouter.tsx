import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Store';
import { adminRoutes, userRoutes, guestRoutes } from '../routes';
import { Roles } from '../utils/consts';

function AppRouter() {
  const userRole = useSelector((state: any) => state.user.role);

  return (
    <Routes>
      {
        userRole === Roles.GUEST
        && guestRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
      }
      {
        userRole === Roles.USER
        && userRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
      }
      {
        userRole === Roles.ADMIN
        && adminRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
      }

      <Route path="*" element={<Store />} />

    </Routes>
  );
}

export default AppRouter;

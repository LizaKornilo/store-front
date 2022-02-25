import { Routes, Route } from 'react-router-dom';
import Store from "../pages/Store";
import { adminRoutes, userRoutes, guestRoutes } from "../routes";
import { ADMIN, GUEST, USER } from '../utils/consts';

const AppRouter = () => {
  const userRole: any = ADMIN;

  return (
    <Routes>
      {
        userRole === GUEST &&
        guestRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />
        })
      }
      {
        userRole === USER &&
        userRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />
        })
      }
      {
        userRole === ADMIN &&
        adminRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />
        })
      }

      <Route path="*" element={<Store />} />

    </Routes>
  );
};

export default AppRouter;
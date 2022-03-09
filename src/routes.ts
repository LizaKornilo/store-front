import AdminPanel from './pages/AdminPanel';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import ProductPage from './pages/ProductPage';
import Store from './pages/Store';
import {
  Routes,
} from './utils/consts';

export const guestRoutes = [
  {
    path: Routes.STORE,
    Component: Store,
  },
  {
    path: `${Routes.PRODUCT}/:id`,
    Component: ProductPage,
  },
  {
    path: Routes.LOGIN,
    Component: Auth,
  },
  {
    path: Routes.REGISTRATION,
    Component: Auth,
  },
];

export const userRoutes = [
  ...guestRoutes,
  {
    path: Routes.BASKET,
    Component: Basket,
  },
];

export const adminRoutes = [
  ...userRoutes,
  {
    path: Routes.ADMIN,
    Component: AdminPanel,
  },
];

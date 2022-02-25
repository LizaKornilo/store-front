import AdminPanel from './pages/AdminPanel';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import ProductPage from './pages/ProductPage';
import Store from './pages/Store';
import {
  ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, STORE_ROUTE,
} from './utils/consts';

export const guestRoutes = [
  {
    path: STORE_ROUTE,
    Component: Store,
  },
  {
    path: `${PRODUCT_ROUTE}/:id`,
    Component: ProductPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];

export const userRoutes = [
  ...guestRoutes,
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const adminRoutes = [
  ...userRoutes,
  {
    path: ADMIN_ROUTE,
    Component: AdminPanel,
  },
];

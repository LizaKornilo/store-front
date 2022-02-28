import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ADMIN, ADMIN_ROUTE, BASKET_ROUTE, GUEST, LOGIN_ROUTE, STORE_ROUTE, USER,
} from '../../utils/consts';
import Btn from '../Btn/Btn';
import './NavBar.scss';
import NavBarSvgSelector from './NavBarSvgSelector';

function NavBar() {
  const userRole = useSelector((state: any) => state.user.role);
  const dispatch = useDispatch();

  const history = useNavigate();
  const location = useLocation();

  const goToStorePage = () => {
    history(STORE_ROUTE);
  };

  const goToLoginPage = () => {
    history(LOGIN_ROUTE);
  };

  const goToBasketPage = () => {
    history(BASKET_ROUTE);
  };

  const logOut = () => {
    dispatch({ type: 'SET_GUEST_ROLE' });
    // delete JWT in future
  };

  const goToAdminPanel = () => {
    history(ADMIN_ROUTE);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <div
            className="logo"
            role="button"
            tabIndex={0}
            onClick={() => goToStorePage()}
            onKeyDown={() => goToStorePage()}
          >
            2TalkGirls
          </div>
          <div className="controlPanel">
            {
              userRole === ADMIN
              && (
                <div
                  className="adminIcon controlPanelItem"
                  role="button"
                  tabIndex={0}
                  onClick={() => goToAdminPanel()}
                  onKeyDown={() => goToAdminPanel()}
                >
                  <NavBarSvgSelector id="admin-icon" />
                </div>)
            }
            {
              (userRole === USER || userRole === ADMIN)
              && (
                <>
                  <div
                    className="basket controlPanelItem"
                    role="button"
                    tabIndex={0}
                    onClick={() => goToBasketPage()}
                    onKeyDown={() => goToBasketPage()}
                  >
                    <NavBarSvgSelector id="basket" />
                    <div className="basketCount">4</div>
                  </div>
                  <div
                    className="controlPanelItem"
                    role="button"
                    tabIndex={0}
                    onClick={() => logOut()}
                    onKeyDown={() => logOut()}
                  >
                    <Btn text="Выйти" type="light" />
                  </div>
                </>
              )
            }

            {
              userRole === GUEST && location.pathname !== LOGIN_ROUTE
                ? (
                  <div
                    className="controlPanelItem"
                    role="button"
                    tabIndex={0}
                    onClick={() => goToLoginPage()}
                    onKeyDown={() => goToLoginPage()}
                  >
                    <Btn text="Войти" type="light" />
                  </div>
                )
                : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

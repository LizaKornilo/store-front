import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Routes, Roles,
} from '../../utils/consts';
import Btn from '../Btn/Btn';
import SvgSelector from '../SvgSelector';
import './NavBar.scss';

function NavBar() {
  const userRole = useSelector((state: any) => state.user.role);
  const dispatch = useDispatch();

  const history = useNavigate();
  const location = useLocation();

  const goToStorePage = () => {
    history(Routes.STORE);
  };

  const goToLoginPage = () => {
    history(Routes.LOGIN);
  };

  const goToBasketPage = () => {
    history(Routes.BASKET);
  };

  const logOut = () => {
    dispatch({ type: 'SET_GUEST_ROLE' });
    // delete JWT in future
  };

  const goToAdminPanel = () => {
    history(Routes.ADMIN);
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
              userRole === Roles.ADMIN
              && (
                <div className="adminIcon controlPanelItem">
                  <SvgSelector id="admin-icon" onClick={() => goToAdminPanel()} />
                </div>)
            }
            {
              (userRole === Roles.USER || userRole === Roles.ADMIN)
              && (
                <>
                  <div className="basket controlPanelItem">
                    <SvgSelector id="basket" onClick={() => goToBasketPage()} />
                    <div className="basketCount">4</div>
                  </div>
                  <div className="controlPanelItem">
                    <Btn text="Выйти" type="light" onClick={() => logOut()} />
                  </div>
                </>
              )
            }

            {
              userRole === Roles.GUEST && location.pathname !== Routes.LOGIN
                ? (
                  <div className="controlPanelItem">
                    <Btn text="Войти" type="light" onClick={() => goToLoginPage()} />
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

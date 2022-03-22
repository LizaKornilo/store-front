import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { BasketItemDto } from '../../common/models/basketItem.dto';
import {
  Routes, Roles,
} from '../../utils/consts';
import Btn from '../Btn/Btn';
import SvgSelector from '../SvgSelector';
import './NavBar.scss';

function getBasketItemsCount(basketItems: BasketItemDto[]) {
  return basketItems.reduce((basketItemsCount, item) => basketItemsCount + item.count, 0);
}

function NavBar() {
  const userRole = useSelector((state: any) => state.user.role);
  const basketItemsCount = getBasketItemsCount(useSelector((state: any) => state.user.basket));
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
          <div className="control-panel">
            {
              userRole === Roles.ADMIN
              && (
                <div className="admin-icon control-panel-item">
                  <SvgSelector id="admin-icon" onClick={() => goToAdminPanel()} />
                </div>)
            }
            {
              (userRole === Roles.USER || userRole === Roles.ADMIN)
              && (
                <>
                  <div className="basket control-panel-item">
                    <SvgSelector id="basket" onClick={() => goToBasketPage()} />
                    <div className="basket-count">{basketItemsCount}</div>
                  </div>
                  <div className="control-panel-item">
                    <Btn text="Выйти" type="light" onClick={() => logOut()} />
                  </div>
                </>
              )
            }

            {
              userRole === Roles.GUEST && location.pathname !== Routes.LOGIN
                ? (
                  <div className="control-panel-item">
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

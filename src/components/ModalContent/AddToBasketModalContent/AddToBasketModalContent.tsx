import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Roles, Routes } from '../../../utils/consts';
import Btn from '../../Btn/Btn';
import './AddToBasketModalContent.scss';

function AddToBasketModalContent() {
  const userRole = useSelector((state: any) => state.user.role);

  const history = useNavigate();

  const goToLoginPage = () => {
    history(Routes.LOGIN);
  };

  const goToBasketPage = () => {
    history(Routes.BASKET);
  };

  return (
    <div className="add-to-basket-modal">
      {
        userRole === Roles.GUEST
          ? (
            <>
              <div className="add-to-basket__message">Войдите в личный кобинет, чтобы добавить товар в корзину</div>
              <Btn text="Войти" type="dark" onClick={() => goToLoginPage()} />
            </>
          )
          : (
            <>
              <div className="add-to-basket__message">Товар успешно добавлен в корзину :)</div>
              <Btn text="Перейти в корзину" type="dark" onClick={() => goToBasketPage()} />
            </>
          )
      }
    </div>
  );
}

export default AddToBasketModalContent;

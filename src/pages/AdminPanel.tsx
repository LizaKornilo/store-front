import React from 'react';
import { useSelector } from 'react-redux';
import './AdminPanel.scss';

function AdminPanel() {
  const userEmail = useSelector((state: any) => state.user.email);

  return (
    <div className="admin-page">
      <div className="container">
        <div className="bigTitle">Админ панель</div>
        <div className="subTitle">{` Пользователь: ${userEmail}`}</div>
        <div className="admin-page__text">
          Здесь может быть много инфы по покупателям, их корзинам и заказам
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

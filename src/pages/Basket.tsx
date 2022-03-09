import React from 'react';
import { useSelector } from 'react-redux';
import { BasketItemDto } from '../common/models/basketItem.dto';
import BasketList from '../components/BasketList/BasketList';
import './Basket.scss';

function getFullBasketPrice(basketItems: BasketItemDto[]) {
  return basketItems.reduce((fullPrice, item) => fullPrice + item.count * item.product.price, 0);
}

function Basket() {
  const userEmail = useSelector((state: any) => state.user.email);
  const basketItems: BasketItemDto[] = useSelector((state: any) => state.user.basket);

  return (
    <div className="basket-page">
      <div className="container">
        <div className="bigTitle">Корзина</div>
        <div className="subTitle">{` Пользователь: ${userEmail}`}</div>
        {
          basketItems.length
            ? (
              <>
                <BasketList basketItems={basketItems} />
                <div className="full-basket-price">{`Итого: ${getFullBasketPrice(basketItems)} р`}</div>
              </>)
            : <div className="emptyMessage">Корзина пуста</div>
        }
      </div>
    </div>
  );
}

export default Basket;

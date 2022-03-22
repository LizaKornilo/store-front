import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BasketItemDto } from '../../common/models/basketItem.dto';
import SvgSelector from '../SvgSelector';
import './BasketItem.scss';

function BasketItem({ basketItem, fullPrice }: { basketItem: BasketItemDto, fullPrice: number }) {
  const dispatch = useDispatch();

  const [minusBtnIsActive, setMinusBtnIsActive] = useState(true);

  useEffect(() => {
    if (basketItem.count <= 1) {
      setMinusBtnIsActive(false);
    } else {
      setMinusBtnIsActive(true);
    }
  }, [fullPrice]);

  const decreaseBasketItem = () => {
    dispatch({ type: 'DECREASE_PRODUCT_IN_BASKET', payload: basketItem.product.id });
  };

  const increaseBasketItem = () => {
    dispatch({ type: 'INCREASE_PRODUCT_IN_BASKET', payload: basketItem.product.id });
  };

  const removeBasketItem = () => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_BASKET', payload: basketItem.product.id });
  };

  return (
    <div className="basket-item">
      <img className="basket__product-image" src={basketItem.product.image} alt={`product ${basketItem.product.id}`} />
      <div className="basket__product-name">{basketItem.product.name}</div>
      <div className="basket__product-count">
        <SvgSelector
          id="minus-icon"
          classNames={minusBtnIsActive ? 'basket__minus-btn' : 'basket__minus-btn svg-btn-desable'}
          onClick={() => decreaseBasketItem()}
        />
        <div className="basket__count">{basketItem.count}</div>
        <SvgSelector
          id="plus-add-icon"
          classNames="basket__plus-btn"
          onClick={() => increaseBasketItem()}
        />
      </div>
      <div className="basket__full-price">
        {`${fullPrice} p`}
      </div>
      <div className="basket__delete-item">
        <SvgSelector
          id="delete-in-circle"
          classNames="basket__delete-btn"
          onClick={() => removeBasketItem()}
        />
      </div>
    </div>
  );
}

export default BasketItem;

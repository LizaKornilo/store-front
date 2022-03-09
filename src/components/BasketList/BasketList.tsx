import React from 'react';
import { BasketItemDto } from '../../common/models/basketItem.dto';
import BasketItem from '../BasketItem/BasketItem';
import './BasketList.scss';

interface BasketListProps {
  basketItems: BasketItemDto[]
}

const getFullPricePerItem = (basketItem: BasketItemDto): number => basketItem.product.price * basketItem.count;

function BasketList({ basketItems }: BasketListProps) {
  return (
    <div className="basket-list">
      {basketItems.map((item: any) => (
        <BasketItem
          key={item.product.id}
          basketItem={item}
          fullPrice={getFullPricePerItem(item)}
        />
      ))}
    </div>
  );
}

export default BasketList;

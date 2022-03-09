import React from 'react';
import { Product } from '../../common/models/product.dto';
import './ProductItem.scss';

function ProductItem({ product, onClick }: { product: Product, onClick: () => void }) {
  return (
    <div
      className="productItem"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <div className="productImage">{product.image}</div>
      <div className="productName">{product.name}</div>
      <div className="productShortDescription">{product.shortDescription}</div>
      <div className="productPrice">{`${product.price} p.`}</div>
    </div>
  );
}

export default ProductItem;

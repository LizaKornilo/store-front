import React from 'react';
import { Product } from '../../common/models/product.dto';
import './ProductItem.scss';

function ProductItem({ product, onClick }: { product: Product, onClick: () => void }) {
  return (
    <div
      className="product-item"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <img className="product-image" src={product.image} alt={`product ${product.id}`} />
      <div className="product-name">{product.name}</div>
      <div className="product-short-description">{product.shortDescription}</div>
      <div className="product-price">{`${product.price} p.`}</div>
    </div>
  );
}

export default ProductItem;

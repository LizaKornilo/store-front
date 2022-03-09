import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../utils/consts';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

function ProductList({ products }: any) {
  const history = useNavigate();

  const goToProductPage = (productId: string) => {
    history(`${Routes.PRODUCT}/${productId}`);
  };

  return (
    <div className="products-list">
      {products.map((product: any) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={() => goToProductPage(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;

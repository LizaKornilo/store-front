import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import SvgSelector from '../components/SvgSelector';
import { Roles } from '../utils/consts';
import './Store.scss';

function Store() {
  const products = useSelector((state: any) => state.products.products);
  const userRole = useSelector((state: any) => state.user.role);

  return (
    <div className="storePage">
      <div className="container">
        <div className="bigTitle">Уютный магазин книжных мелочей</div>
        {
          products.length
            ? <ProductList products={products} />
            : <div className="emptyMessage">Продуктов нет</div>
        }
        {
          userRole === Roles.ADMIN
          && (
            <div className="storeAddBtn">
              <SvgSelector id="plus-add-icon" />
            </div>)
        }
      </div>
    </div>
  );
}

export default Store;

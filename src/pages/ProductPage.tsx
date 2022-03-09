import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Btn from '../components/Btn/Btn';
import SvgSelector from '../components/SvgSelector';
import { Roles } from '../utils/consts';
import './ProductPage.scss';

function ProductPage() {
  const productId = useParams().id;

  const currentProduct = useSelector((state: any) => state.products.products)
    .find((item: any) => item.id === Number(productId));
  const userRole = useSelector((state: any) => state.user.role);

  const showGuestAddToBasketPopup = () => {
    console.log('GuestAddToBasket');
  };

  const showAddToBasketPopup = () => {
    console.log('AddToBasket');
  };

  return (
    <div className="productPage">
      <div className="container">
        <div className="productPage__wrapper">
          <div className="productImage">{currentProduct.image}</div>
          <div className="product-page__info">
            <div className="productInfo">
              <div className="productName">{currentProduct.name}</div>
              <div className="productPrice">{`${currentProduct.price} p.`}</div>
              {
                userRole === Roles.GUEST
                  ? <Btn text="Добавить в корзину" type="dark" onClick={() => showGuestAddToBasketPopup()} />
                  : <Btn text="Добавить в корзину" type="dark" onClick={() => showAddToBasketPopup()} />
              }
              <div className="productDescription">{currentProduct.description}</div>
            </div>
            {
              userRole === Roles.ADMIN
                ? (
                  <div className="product-page__admin-tools">
                    <SvgSelector
                      id="edit-pencil"
                      classNames="admin-edit-pr-btn"
                    />
                    <SvgSelector id="delete-basket" classNames="admin-delete-pr-btn" />
                  </div>
                ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

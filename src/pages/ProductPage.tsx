import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Product } from '../common/models/product.dto';
import Btn from '../components/Btn/Btn';
import Modal from '../components/Modal/Modal';
import AddToBasketModalContent from '../components/ModalContent/AddToBasketModalContent/AddToBasketModalContent';
import DeleteModalContent from '../components/ModalContent/DeleteModalContent/DeleteModalContent';
import AddEditModalContent from '../components/ModalContent/AddEditModalContent/AddEditModalContent';
import SvgSelector from '../components/SvgSelector';
import { Roles } from '../utils/consts';
import './ProductPage.scss';

function ProductPage() {
  const productId = Number(useParams().id);

  const currentProduct: Product = useSelector((state: any) => state.products.products)
    .find((item: any) => item.id === productId);
  const userRole = useSelector((state: any) => state.user.role);

  const [basketModalActive, setBasketModalActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  const addProductToBasket = () => {
    if (userRole !== Roles.GUEST) {
      // Make request via Saga (currentProduct.id user.id)
    }
    setBasketModalActive(true);
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-page__wrapper">
          {/* <div> */}
          <img className="product-image" src={currentProduct.image} alt={`product ${currentProduct.id}`} />
          {/* </div> */}
          <div className="product-page__info">
            <div className="product-info">
              <div className="product-name">{currentProduct.name}</div>
              <div className="product-price">{`${currentProduct.price} p.`}</div>

              <Btn text="Добавить в корзину" type="dark" onClick={() => addProductToBasket()} />
              <Modal active={basketModalActive} setActive={setBasketModalActive}>
                <AddToBasketModalContent />
              </Modal>

              <div className="product-description">{currentProduct.description}</div>
            </div>
            {
              userRole === Roles.ADMIN
                ? (
                  <>
                    <div className="product-page__admin-tools">
                      <SvgSelector
                        id="edit-pencil"
                        classNames="admin-edit-pr-btn"
                        onClick={() => setEditModalActive(true)}
                      />
                      <SvgSelector
                        id="delete-basket"
                        classNames="admin-delete-pr-btn"
                        onClick={() => setDeleteModalActive(true)}
                      />
                    </div>
                    <Modal active={editModalActive} setActive={setEditModalActive}>
                      <AddEditModalContent
                        variant="editContent"
                        product={currentProduct}
                        setModalActive={setEditModalActive}
                      />
                    </Modal>
                    <Modal active={deleteModalActive} setActive={setDeleteModalActive}>
                      <DeleteModalContent productId={productId} setModalActive={setDeleteModalActive} />
                    </Modal>
                  </>
                ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

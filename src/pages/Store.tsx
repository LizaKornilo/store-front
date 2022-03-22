import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal/Modal';
import AddEditModalContent from '../components/ModalContent/AddEditModalContent/AddEditModalContent';
import ProductList from '../components/ProductList/ProductList';
import SvgSelector from '../components/SvgSelector';
import { Roles } from '../utils/consts';
import './Store.scss';

function Store() {
  const products = useSelector((state: any) => state.products.products);
  const userRole = useSelector((state: any) => state.user.role);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="store-page">
      <div className="container">
        <div className="big-title">Уютный магазин книжных мелочей</div>
        {
          products.length
            ? <ProductList products={products} />
            : <div className="empty-message">Продуктов нет</div>
        }
        {
          userRole === Roles.ADMIN
          && (
            <>
              <div className="store-add-btn">
                <SvgSelector id="plus-add-icon" onClick={() => setModalActive(true)} />
              </div>
              <Modal active={modalActive} setActive={setModalActive}>
                <AddEditModalContent variant="addContent" setModalActive={setModalActive} />
              </Modal>
            </>
          )
        }
      </div>

    </div>
  );
}

export default Store;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../utils/consts';
import Btn from '../../Btn/Btn';
import './DeleteModalContent.scss';

function DeleteModalContent({ productId, setModalActive }: { productId: number, setModalActive: Function }) {
  const history = useNavigate();

  const dispatch = useDispatch();

  const goToStorePage = () => {
    history(Routes.STORE);
  };

  const deleteProduct = () => {
    dispatch({ type: 'DELETE_PRODUCT_BY_ID', payload: productId });
    setModalActive(false);
    goToStorePage();
  };

  return (
    <div className="delete-modal">
      <div className="delete-from-basket__message">Удалить товар?</div>
      <Btn text="ок" type="dark" onClick={() => deleteProduct()} />
    </div>
  );
}

export default DeleteModalContent;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Product } from '../../../common/models/product.dto';
import Btn from '../../Btn/Btn';
import './AddEditModalContent.scss';
import FileUploader from '../../FileUploader/FileUploader';
import uploadImageToCloudinary from '../../../common/api/cloudinaryApi';

interface Props {
  variant: string,
  product?: Product,
  setModalActive: Function,
}

interface Inputs {
  image: string,
  name: string,
  shortDescription: string,
  fullDescription: string,
  price: number,
}

function AddEditModalContent({ variant, product, setModalActive }: Props) {
  const defaultVals = (product) ? {
    image: product.image,
    name: product.name,
    shortDescription: product.shortDescription,
    fullDescription: product.description,
    price: product.price,
  } : {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(
    {
      defaultValues: defaultVals,
    },
  );

  const [imageFile, setImageFile] = useState();
  const [submitIsDesabled, setSubmitIsDesabled] = useState(false);

  const dispatch = useDispatch();

  const updateProduct = (productId: number, data: Inputs) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: {
        id: productId,
        image: data.image,
        name: data.name,
        shortDescription: data.shortDescription,
        description: data.fullDescription,
        price: data.price,
      },
    });
  };

  const addProduct = (data: Inputs) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        image: data.image,
        name: data.name,
        shortDescription: data.shortDescription,
        description: data.fullDescription,
        price: data.price,
      },
    });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitIsDesabled(true);
    if (imageFile) {
      /* eslint-disable no-param-reassign */
      data = { ...data, image: await uploadImageToCloudinary(imageFile) };
    }

    /* eslint-disable no-unused-expressions */
    (variant === 'editContent' && product)
      ? updateProduct(product.id, data)
      : addProduct(data);

    setSubmitIsDesabled(false);
    setModalActive(false);
  };

  return (
    <div className="edit-modal">
      <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>

        <FileUploader defaultImage={product ? product.image : undefined} setImageFile={setImageFile} />

        <label className="modal-label">Название</label>
        <input className="modal-input" {...register('name', { required: true })} />
        {errors.name?.type === 'required' && <div className="modal__err-mess">Название - обязательное поле</div>}

        <label className="modal-label">Краткое описание</label>
        <input className="modal-input" {...register('shortDescription', { maxLength: 40 })} />
        {errors.shortDescription?.type === 'maxLength'
          && <div className="modal__err-mess">Максимальная длина - 40 символов</div>}

        <label className="modal-label">Полное описание</label>
        <textarea className="modal-textarea-input" {...register('fullDescription')} />

        <label className="modal-label">Цена</label>
        <input className="modal-input" type="number" {...register('price', { required: true, min: 0 })} />
        {errors.price?.type === 'required' && <div className="modal__err-mess">Цена - обязательное поле</div>}
        {errors.price?.type === 'min' && <div className="modal__err-mess">Цена не может быть отрицательной</div>}

        <div className="modal-right-btn">
          {/* <button onClick={() => reset()}>Reset</button> */}
          <Btn
            text={(variant === 'editContent' && product) ? 'Обновить' : 'Добавить'}
            type="dark"
            isSubmitType
            disabled={submitIsDesabled}
          />
        </div>

      </form>
    </div>
  );
}

AddEditModalContent.defaultProps = {
  product: {
    image: '',
    name: ':)',
    shortDescription: '',
    fullDescription: '',
    price: 0,
  },
};

export default AddEditModalContent;

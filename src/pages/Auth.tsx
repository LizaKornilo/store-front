/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-control-regex */

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useLocation } from 'react-router-dom';
import Btn from '../components/Btn/Btn';
import { Routes } from '../utils/consts';
import './Auth.scss';

const emailRegex = /(?:[a-z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

interface Inputs {
  email: string,
  password: string,
}

function Auth() {
  const location = useLocation();
  const isLoginPage = location.pathname === Routes.LOGIN;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isLoginPage) console.log('It is Login page');
    else console.log('It is registration page');
    console.log(data);
  };

  return (
    <div className="auth-reg-page">
      <form className="auth-reg-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-reg__title">
          {isLoginPage ? 'Авторизация' : 'Регистрация'}
        </div>
        <label className="auth-reg__email-label">Email</label>
        <input
          className="auth-reg__email-input"
          placeholder="IvanowIvan@mail.ru"
          {...register('email', {
            required: true, pattern: emailRegex,
          })}
        />
        {errors.email?.type === 'required' && <div className="auth-reg__err-mess">Email - обязательное поле</div>}
        {errors.email?.type === 'pattern' && <div className="auth-reg__err-mess">Неверный формат email</div>}

        <label className="auth-reg__pass-label">Пароль</label>
        <input
          className="auth-reg__pass-input"
          type="password"
          placeholder="1234"
          autoComplete="on"
          {...register('password', { required: true, minLength: 4 })}
        />
        {errors.password?.type === 'required' && <div className="auth-reg__err-mess">Пароль - обязательное поле</div>}
        {errors.password?.type === 'minLength' && <div className="auth-reg__err-mess">Пароль должен содержать не менее 4 символов</div>}

        <div className="auth-reg__form-nav">
          <div className="auth-reg__question">
            {
              isLoginPage
                ? (
                  <>
                    Не зарегистрированны?
                    <NavLink to={Routes.REGISTRATION} className="to-login-page">Регистрация</NavLink>
                  </>)
                : (
                  <>
                    Уже есть аккаунт?
                    <NavLink to={Routes.LOGIN} className="to-reg-page">Войти</NavLink>
                  </>)
            }
          </div>
          <div className="auth-reg__btn">
            {
              isLoginPage
                ? <Btn text="Войти" type="dark" isSubmitType />
                : <Btn text="Зарегистрироваться" type="dark" isSubmitType />
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Auth;

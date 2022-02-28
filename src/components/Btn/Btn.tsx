import React from 'react';
import './Btn.scss';

function Btn({ text, type }: any) {
  return (
    <button className={`myButton ${type}`} type="button">{text}</button>
  );
}

export default Btn;

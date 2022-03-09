import React from 'react';
import './Btn.scss';

interface Props {
  text: string,
  type: string,
  isSubmitType?: boolean;
  onClick?: () => void,
}

function Btn({
  text, type, isSubmitType, onClick,
}: Props) {
  if (isSubmitType === true) {
    return (
      <button
        type="submit"
        className={`myButton ${type}`}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`myButton ${type}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Btn.defaultProps = {
  isSubmitType: false,
  onClick: () => null,
};

export default Btn;

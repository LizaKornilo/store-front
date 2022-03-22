import React from 'react';
import './Btn.scss';

interface Props {
  text: string,
  type: string,
  isSubmitType?: boolean;
  onClick?: () => void,
  disabled?: boolean,
}

function Btn({
  text, type, isSubmitType, onClick, disabled,
}: Props) {
  if (isSubmitType === true) {
    return (
      <button
        type="submit"
        className={`my-button ${type}`}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`my-button ${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Btn.defaultProps = {
  isSubmitType: false,
  disabled: false,
  onClick: () => null,
};

export default Btn;

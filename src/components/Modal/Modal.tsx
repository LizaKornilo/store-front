import React from 'react';
import SvgSelector from '../SvgSelector';
import './Modal.scss';

type Props = {
  active: boolean,
  setActive: Function,
  children: JSX.Element,
};

function Modal({ active, setActive, children }: Props) {
  return (
    <div
      className={active ? 'modal modal-active' : 'modal'}
      role="button"
      tabIndex={0}
      onClick={() => setActive(false)}
      onKeyDown={() => setActive(false)}
    >
      <div
        className="modal__content"
        role="button"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className="modal-close">
          <SvgSelector id="close" className="modal-close__svg" onClick={() => setActive(false)} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

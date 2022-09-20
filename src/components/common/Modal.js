import React from 'react';

const Modal = (props) => {
  const { id, description, image, price, title } = props.product;
  const { show } = props;
  if (!show) return null;

  return (
    <div onClick={props.onClose} className="modal">
      <div className="modal__content">
        <div className="modal__content__body">
          <img src={image} />
          <span>
            <h2>{title}</h2>
            <p>{description}</p>
          </span>

          <div>
            <p>{price}</p>
            boton
          </div>
        </div>
        <div onClick={props.onClose} className="modal__content__close">
          Cerrar
        </div>
      </div>
    </div>
  );
};

export default Modal;

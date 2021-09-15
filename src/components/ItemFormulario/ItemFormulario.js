import React from 'react';

import './styles.css';

export default function ItemFormulario({ type, id, title }) {
  return (
    <div className="itemFormulario">

      <div className="titulo">{title}</div>

      <input className="campo" type={type} id={id} />

    </div>

  );
}
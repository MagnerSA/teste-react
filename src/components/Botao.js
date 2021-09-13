import React from 'react';

export default function Botao({ onClick, text }) {
  return (
    <center>
      <button type="button" onClick={onClick}>{text}</button>
    </center>
  );
}
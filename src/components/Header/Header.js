import React from 'react';
import './styles.css';

export default function Header({ name }) {
  return (
    <div className="header">
      <h1>{name == "refeicoes" ? "REFEIÇÕES" : "CADASTRAR REFEIÇÃO"}</h1>
    </div>

  );
}
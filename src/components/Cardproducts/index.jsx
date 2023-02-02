import { useState } from "react";

function Renderprodutsdata({ burguerlist }) {
  return (
    <ul>
      {burguerlist.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt="" />
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <p>{product.price}</p>
          <button>Adicionar</button>
        </li>
      ))}
    </ul>
  );
}

export default Renderprodutsdata;

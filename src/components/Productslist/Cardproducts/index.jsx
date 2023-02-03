import { useState } from "react";
import { Ulcontainer } from "./style.js";

export function Renderprodutsdata({ burguerlist }) {
  return (
    <Ulcontainer>
      {burguerlist.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt="" />
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <p>{product.price}</p>
          <button>Adicionar</button>
        </li>
      ))}
    </Ulcontainer>
  );
}

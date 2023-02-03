import { useState } from "react";
import { Ulcontainer } from "./style.js";

export function Renderprodutsdata({ burguerlist, addcardproduct }) {
  return (
    <Ulcontainer>
      {burguerlist.map((product) => (
        <li key={product.id}>
          <div className="containerimgcard">
            <img src={product.img} alt="" />
          </div>
          <div className="containerinfocard">
            <h3>{product.name}</h3>
            <span>{product.category}</span>
            <p>
              {Math.abs(product.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => addcardproduct(product)}>Adicionar</button>
          </div>
        </li>
      ))}
    </Ulcontainer>
  );
}

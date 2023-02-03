import React from "react";
import { Cartlist } from "../Cart";
import { Emptylist } from "../Cart/Emptylist";
import { Productslist } from "../Productslist";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Productslist />
      <section>
        <div>Carrinho de compras</div>
        <Emptylist />
        <Cartlist />
      </section>
    </Container>
  );
};

import React from "react";
import Logokenzie from "../Imglogo";
import { Headercontainer } from ".";

export const Header = () => {
  return (
    <>
      <Headercontainer>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <nav>
          <form action="" className="containersearch">
            <input type="text" placeholder="Digitar Pesquisa" />
            <button type="submit">Pesquisar</button>
          </form>
        </nav>
      </Headercontainer>
    </>
  );
};

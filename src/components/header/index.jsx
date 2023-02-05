import React from "react";
import { Inputsearch } from "./Searchinput";
import { Headercontainer } from "./style";

export const Header = ({ setSearch }) => {
  return (
    <>
      <Headercontainer>
        <section>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <Inputsearch setSearch={setSearch} />
        </section>
      </Headercontainer>
    </>
  );
};

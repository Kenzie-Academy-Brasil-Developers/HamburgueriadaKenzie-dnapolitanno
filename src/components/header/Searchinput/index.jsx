import React from "react";
import { useState } from "react";
import { Navsearch } from "./style";

export const Inputsearch = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };
  return (
    <>
      <Navsearch>
        <nav>
          <form onSubmit={submit} className="containersearch">
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button type="submit" onClick={() => setSearch("")}>
              Pesquisar
            </button>
          </form>
        </nav>
      </Navsearch>
    </>
  );
};

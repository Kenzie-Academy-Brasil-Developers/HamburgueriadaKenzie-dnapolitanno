import React from "react";
import Logokenzie from "../Imglogo";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="headercontainer container">
          <Logokenzie />
          <nav>
            <form action="" className='containersearch'>
              <input type="text" placeholder="Digitar Pesquisa" />
              <button type="submit">Pesquisar</button>
            </form>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;

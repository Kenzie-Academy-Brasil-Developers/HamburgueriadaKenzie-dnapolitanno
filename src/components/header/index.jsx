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
            <ul>
              <li>
                <input type="text" placeholder="Digitar Pesquisa" />
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;

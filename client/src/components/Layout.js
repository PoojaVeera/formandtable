import React from "react";
import { Nav, NavBtn, NavBtnLink } from "./Layout.styles";
export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          <NavBtnLink to="/" activestyle="true">
            HOME
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/FormPage" activestyle="true">
            FORM
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/TablePage" activestyle="true">
            TABLE
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

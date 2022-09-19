import React from "react";
import { Nav, NavBtn, NavBtnLink } from "./Layout.styles";
export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          <NavBtnLink to="/" activeStyle>
            HOME
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/FormPage" activeStyle>
            FORM
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/TablePage" activeStyle>
            TABLE
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

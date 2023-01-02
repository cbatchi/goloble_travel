import React from "react";
import { brandPrimary } from "../../assets";
import Icon from "../icon/Icon";

import NavbarStyled from "./navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <ul className="navbar__brand">
        <li>
          <a href="/">
            <img src={brandPrimary} alt="brand of site" />
          </a>
        </li>
      </ul>

      <ul className="navbar__menu">
        <li>
          <a href="/">
            <Icon name="airplane-sharp" id="icon" />
            find flight
          </a>
        </li>
        <li>
          <a href="/">
            <Icon name="bed-sharp" id="icon" />
            find stays
          </a>
        </li>
      </ul>

      <ul className="navbar__menu">
        <li>
          <a href="/">login</a>
        </li>
        <li>
          <a href="/">sign up</a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

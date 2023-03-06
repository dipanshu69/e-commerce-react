import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartOpen } from "../store/cart/cart.selector.js"; 
import {selectCurrentUser} from "../store/user/user.selector.js"

import CardIcon from "../Component/cart-icon/cart-icon.component";
import CardDropdown from "../Component/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import { signOutUser } from "../utils/firebase/firebase.utils";


import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {

  const cartOpen = useSelector(selectCartOpen)
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/sign-in">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {cartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCurrentUser} from "../store/user/user.selector.js"
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import CardIcon from "../Component/cart-icon/cart-icon.component";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CardDropdown from "../Component/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { CartContext } from "../contexts/cart.context";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { cartOpen } = useContext(CartContext);

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

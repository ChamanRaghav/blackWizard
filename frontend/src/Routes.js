import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Products } from "./components/Products/Products";
// import { ProductItem } from "./components/ProductItem/ProductItem";
import { CommingSoon } from "./components/CommingSoon/CommingSoon"
import Screens from "./widget/Screens/Screens";

const Routes = () => {
  return (
    <>
      <Switch>
        <LoadScreens path="/home">
          <Home />
        </LoadScreens>
        <LoadScreens path="/clothes/:clothId">
          <CommingSoon />
          {/* <ProductItem /> */}
        </LoadScreens>
        <LoadScreens path="/clothes">
          <CommingSoon />
          {/* <Products /> */}
        </LoadScreens>
        <LoadScreens path="/products">
          <Products />
        </LoadScreens>
        <LoadScreens path="/">
          <Home />
        </LoadScreens>
      </Switch>
    </>
  );
};

const LoadScreens = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <Screens>{children}</Screens>
    </Route>
  )
}

export default Routes;
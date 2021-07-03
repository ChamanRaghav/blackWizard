import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
// import { Products } from "./components/Products/Products";
// import { ProductItem } from "./components/ProductItem/ProductItem";
import { CommingSoon } from "./components/CommingSoon/CommingSoon"

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/clothes/:clothId">
          <CommingSoon />
          {/* <ProductItem /> */}
        </Route>
        <Route path="/clothes">
          <CommingSoon />
          {/* <Products /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

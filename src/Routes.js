import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
// import { Products } from "./components/Products/Products";
// import { ProductItem } from "./components/ProductItem/ProductItem";
import { Shorts } from "./components/CommingSoon/Shorts"
import { Tshirts } from "./components/CommingSoon/Tshirts"
import { TrackPants } from "./components/CommingSoon/TrackPants"
import { Tracksuits } from "./components/CommingSoon/tracksuits"
import { Shoes } from "./components/CommingSoon/Shoes"
import { Sando } from "./components/CommingSoon/Sando"
import { Underwear} from "./components/CommingSoon/Underwear"
import { Shokes } from "./components/CommingSoon/Shokes";


// import { tshirts } from "./components/CommingSoon/tshirts"

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/clothes/1">
          {/* <CommingSoon /> */}
          <Tshirts />
          {/* <ProductItem /> */}
        </Route>

        <Route path="/clothes/2">
          {/* <CommingSoon /> */}
          <Shorts />
          {/* <ProductItem /> */}
        </Route>

        <Route path="/clothes/3">
          {/* <CommingSoon /> */}
          <TrackPants />
          {/* <ProductItem /> */}
        </Route>

        <Route path="/clothes/4">
          {/* <CommingSoon /> */}
          <Tracksuits />
          {/* <ProductItem /> */}
        </Route>
        <Route path="/clothes/5">
          {/* <CommingSoon /> */}
          <Shoes />
          
          {/* <ProductItem /> */}
        </Route>
        <Route path="/clothes/6">
          {/* <CommingSoon /> */}
          <Sando />
          
          {/* <ProductItem /> */}
        </Route>
        
        <Route path="/clothes/7">
          {/* <CommingSoon /> */}
          <Underwear />
          
          {/* <ProductItem /> */}
        </Route>
        <Route path="/clothes/8">
          {/* <CommingSoon /> */}
          <Shokes/>
          
          {/* <ProductItem /> */}
        </Route>
        
      
        
        <Route path="/clothes">
          
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

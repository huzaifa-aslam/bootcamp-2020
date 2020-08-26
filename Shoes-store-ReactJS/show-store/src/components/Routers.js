import React from "react";
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import {NavBar} from './index'
import Links from './Links'

import { Products,ProductsItem } from "./index";
function Routers() {
  return (
    <Router>
<NavBar/>

      <Switch>
      <Route  path="/products">
        <Products />
      </Route>
      <Route  path="/productsitem/:id">
        <ProductsItem />
      </Route>


      {/* <Route path="*" component={() => <h1>404 not found</h1>} /> */}
      </Switch>
    </Router>
  );
}

export default Routers;

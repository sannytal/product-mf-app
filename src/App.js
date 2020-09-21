import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Product from "./components/Product";

import { getProductPath } from "./components/Util/path";
import { ContextRegistryState } from "./context";

const App = (props) => {
  return (
    <ContextRegistryState containerProps={props?.containerData}>
      <Router>
        <Switch>
          <Route path={getProductPath()} component={Product} />
          
          <React.Fragment>
            <Route path={`/` || `*`} render={() => <Redirect to={getProductPath()} />} />
        </React.Fragment>
        </Switch>
      </Router>
    </ContextRegistryState>
  );
};

export default App;

import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import About from "./components/About/About";
import Learn from "./components/Learn/Learn";
import Gallery from "./containers/Gallery/Gallery";
import Contact from "./containers/Contact/Contact";
import Home from "./components/Home/Home";
import Article from "./components/Learn/Article/Article";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/learn" component={Learn} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/article"
            render={(props) => <Article {...props} key={Math.random()} />}
          />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export default withRouter(App);

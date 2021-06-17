import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import CompInfo from "./compInfo";
import SeoInfo from "./seoInfo";
import Services from "./services";
import Contact from "./contact";
import GDPR from "./gdpr";

export function WebPages(props) {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/info" component={CompInfo} />
      <Route path="/seoinfo" component={SeoInfo} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/gdpr" component={GDPR} />
    </Router>
  );
}

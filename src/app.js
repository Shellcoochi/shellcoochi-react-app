import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const Main = (props) => (
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/inbox">Inbox</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

const About = () => <h3>About</h3>;

const Inbox = (props) => (
  <div>
    <h2>Inbox</h2>
    {props.children || "Welcome to your Inbox"}
  </div>
);

const Message = (props) => <h3>Message {props.params.id}</h3>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/inbox" component={Inbox} />
      </Switch>
    </Router>
  );
};

export default App;

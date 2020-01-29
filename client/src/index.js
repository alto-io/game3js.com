import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import './index.css';

import Backend from 'react-dnd-html5-backend'
//import TouchBackend from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
</DndProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

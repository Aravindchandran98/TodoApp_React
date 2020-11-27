import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
//importing bootstrap 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
//importing Router
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(<Router><App/></Router>,document.querySelector("#root"));

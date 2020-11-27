import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./HeaderStyles.css";
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                {/* navbar in bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img src="todoapplogo.jpg" alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"><h1 className="text-center font-weight-bold">TODO-APP</h1> <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <Link className="headerLink" to="/register">
            <button className="buttonheader btn btn-primary mx-2">
              Register
             </button>
             </Link>  
             <Link className="headerLink" to="/login" >  
            <button className="buttonheader btn btn-primary mx-2">
              Login 
            </button>
            </Link>
            <Link className="headerLink" to="/todo">
            <button className="buttonheader btn btn-primary mx-2">
              Todoapp
            </button>
            </Link>
        </div>
      </nav>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;
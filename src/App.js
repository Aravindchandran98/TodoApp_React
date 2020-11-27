import React, { Component, Fragment } from 'react';
import "./App.css"
import HeaderComponent from './Component/HeaderComponent/HeaderBlock';
import HomeBlockComponent from './Component/HomeBlock/HomeBlockComponent';
import LoginComponent from './Component/LoginBlock/LoginComponent';
import RegisterComponent from './Component/RegisterBlock/RegisterComponent';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import TodoItems from './Component/Todos/TodoItems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <Fragment>
                <HeaderComponent/>
                {/* <HomeBlockComponent/> */}
                <Switch>
                <Route path="/" exact component={HomeBlockComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/todo" exact component= {TodoItems}/>
                </Switch>
                {/* <HomeBlockComponent/> */}
                {/* <RegisterComponent/>
                <LoginComponent/> */}
            </Fragment>
            
         );
    }
}
 
export default App;
import React, { Component, Fragment } from 'react';
import "./HomeBlockComponent.css";

class HomeBlockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <section className="container">
                    <article>
                        <h1 className="jumbotron">Welcome to TODO-APP please login to proceed  
                           <img src="tick_icon.png" id="tickimage" alt="tickicon"/>
                        </h1>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default HomeBlockComponent;
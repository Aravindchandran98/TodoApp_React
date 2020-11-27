import React, { Component } from 'react';
import "./RegisterComponent.css"

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="container col-md-6 registerform">
                <article>
                    <h1 className="form-title text-center">REGISTER</h1>
                    <form>
                        <div className="form-group col-md-3">
                            <label For="username">Username</label>
                            <input type="text" className="form-control" placeholder="Enter username" id="username"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label For="email">Email</label>
                            <input type="text" className="form-control" placeholder="Enter email" id="email"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label For="password">Password</label>
                            <input type="text" className="form-control" placeholder="Enter password" id="password"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label For="phonenumber">Phonenumber</label>
                            <input type="text" className="form-control" placeholder="Enter phonenumber" id="phonenumber"/>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </article>
            </section>
         );
    }
}
 
export default RegisterComponent;
import React, { Component, Fragment } from 'react'

class TodoListElements extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <Fragment>
            <div>
               <ul>{this.props.items.id}</ul>
               <ul>{this.props.items.title}</ul>
            </div>
        </Fragment>
         );
    }
}
 
export default TodoListElements;
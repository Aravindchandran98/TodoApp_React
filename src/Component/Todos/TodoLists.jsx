import React, { Component } from 'react'
import TodoListElements from './TodoListElements';

class TodoLists extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            values: "",
         }
    }
    handleInput = (event) =>{
        // event.preventDefault();
        // console.log("i am handle input");
        // console.log(event.target.value);
        this.setState({ values : event.target.value });
        // var value = event.target.value;
        // console.log({this.state.values});
    }
    getInputValue = () => {
        // var temp = this.state.values;
        this.props.addItem(this.state.values);
    }
    // temp = () => console.log(`hi ${this.state.values}`);
    render() { 
        return ( 
            <>
                    <input type="text" placeholder="Add items"  onChange={this.handleInput}/>
                    {/* <h1>{this.state.values}</h1> */}
                    <button className="btn btn-warning" onClick={this.getInputValue}>Add</button>
                    {/* <button onClick={this.temp}> hi </button> */}
                     {/* <ul>{this.props.items.id}</ul>
                     <ul>{this.props.items.id}</ul>
                     <ul>{this.props.items.title}</ul>
                     <ul>{this.props.items.completed}</ul>
                     <hr/> */}
                     {
                         this.props.list.map((items)=>(
                            <TodoListElements items={items}/>  
                         ))
                     }
            </>
         );
    }
}
 
export default TodoLists;
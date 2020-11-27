import React, { Component, Fragment } from 'react';
import TodoLists from './TodoLists';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         list: [ 
                {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
                },
                {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
                },
                {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
                },
                {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
                },
                {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
                },
               ]
         };
    }
    addItem = (title) => {
        // var new = {
        //     userId :1,
        //     id: 7,
        //     title: title,
        //     completed: false    
        // }
        console.log("his",title);
    } 
    render() { 
        return ( 
            <Fragment>
                <ul>
                    <TodoLists list={this.state.list} addItem={this.addItem}/>
                    {/* {this.state.list.map(items =>(
                        <div>
                    {/* <ul>{items.id}</ul>
                     <ul>{items.id}</ul>
                     <ul>{items.title}</ul>
                     <ul>{items.completed}</ul>  */}
                     {/* <TodoLists items={items}/>
                     <hr/>
                    </div>
                    ))}  */}
                </ul>
            </Fragment>
         );
    }
}
 
export default TodoItems;

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//     }
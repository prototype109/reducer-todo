// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
            <ul>
                {props.list.map( item => (
                    <Todo key={item.id} 
                          item={item} 
                          select={props.select} />
                    // <li key={index}>{item}</li>
                ))}
            </ul>
    )
}

export default TodoList;
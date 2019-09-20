import React from 'react';
import './Todo.css';

const Todo = ({item, dispatch}) => {
    return <li className={`${item.completed ? 'selected' : ''}`}
               onClick={() => dispatch({type: 'TODO_SELECT', payload: item.id})}>
                {item.item}
               </li>
}

export default Todo;
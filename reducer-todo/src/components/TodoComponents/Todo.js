import React from 'react';
import './Todo.css';

const Todo = ({item, select}) => {
    return <li className={`item${item.completed ? ' selected' : ''}`}
               onClick={() => select(item.id)} >{item.task}</li>
}

export default Todo;
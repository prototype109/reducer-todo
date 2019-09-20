import React, { useState } from 'react';

function TodoForm({dispatch}){
    const [itemInput, setItemInput] = useState('');

    const handleInput = e => {
        setItemInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'TODO_ADD', payload: itemInput})
        setItemInput('');
    }

    const handleClear = () => {
        dispatch({type: 'TODO_CLEAR'})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
                    value={itemInput} 
                    onChange={handleInput}/>
            <button type='submit'>Add Todo</button>
            <button type='button' onClick={handleClear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
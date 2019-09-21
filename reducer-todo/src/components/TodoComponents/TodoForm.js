import React, { useState } from 'react';
import styled from 'styled-components';

function TodoForm({dispatch}){
    const FormComp = {
        display: 'flex',
        flexDirection: 'column'
    };

    const Button = styled.button`
        position: relative;
        left: 25%;
        width: 28%;
        font-size: 1.7rem;
        background: rgba(0, 0, 0, 0);
        border: 1px solid black; 
        margin-top: 10px;
        border-radius: 4px;
    `;

    const Input = styled.input`
        margin: 0 18%;
        width: 206px;
    `;

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
        <form onSubmit={handleSubmit} style={FormComp}>
            <Input type='text' 
                    value={itemInput} 
                    onChange={handleInput}/>
            <Button type='submit'>Add Todo</Button>
            <Button type='button' onClick={handleClear}>Clear Completed</Button>
        </form>
    )
}

export default TodoForm;
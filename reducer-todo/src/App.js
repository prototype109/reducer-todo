import React, { useReducer } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { initialState, reducer } from './reducers/reducer';
import styled from 'styled-components';

function App () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Center = styled.div`
    margin: 0 auto;
    width: 20%;
  `;
  
    return (
      <Center>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm dispatch={dispatch} />
        <TodoList list={state.list} dispatch={dispatch} />
      </Center>
    );
}

export default App;

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { initialState, reducer } from './reducers/reducer';

function App () {
  

  // const toggleSelection = (itemId) => {
  //   this.setState({
  //     list: this.state.list.map(item => {
  //       if(item.id === itemId){
  //         return {...item, completed: !item.completed}
  //       }
  //       return item;
  //     })
  //   });
  // }

  // const addToList = item => {
  //   this.setState({list: [...this.state.list, item]});
  // }

  // const clearList = () => {
  //   this.setState({list: this.state.list.filter( item => !item.completed)})
  // }

  
  render() {
    return (
      <div>
        {/* <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} select={this.toggleSelection} />
        <TodoForm add={this.addToList} clear={this.clearList} /> */}
      </div>
    );
  }
}

export default App;

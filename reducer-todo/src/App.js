import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state

  constructor(){
      super();
      this.state = {
        list : [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
    }
  }

  toggleSelection = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === itemId){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    });
  }

  addToList = item => {
    this.setState({list: [...this.state.list, item]});
  }

  clearList = () => {
    this.setState({list: this.state.list.filter( item => !item.completed)})
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} select={this.toggleSelection} />
        <TodoForm add={this.addToList} clear={this.clearList} />
      </div>
    );
  }
}

export default App;

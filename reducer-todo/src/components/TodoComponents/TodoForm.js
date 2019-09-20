import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            itemInput: ''
        }
    }

    handleInput = e => {
        this.setState({itemInput: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add({task: this.state.itemInput, 
                        id: Date.now(),
                        completed: false})
        this.setState({itemInput: ''});
    }

    handleClick = () => {
        this.props.clear();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                       value={this.state.itemInput} 
                       onChange={this.handleInput}/>
                <button type='submit'>Add Todo</button>
                <button type='button' onClick={this.handleClick}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
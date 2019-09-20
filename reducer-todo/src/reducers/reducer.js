export const initialState = {
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
    let tempArr = [...state.list];
    switch(action.type){
        case 'TODO_SELECT':
            tempArr = tempArr.map(item => {
                if(item.id === action.payload)
                    item.completed = !item.completed;
                
                return item;
            })
            return {
                list: [...tempArr]
            }
        case 'TODO_ADD':
            return {
                list: [...state.list, {item: action.payload, 
                                  completed: false,
                                  id: Date.now()}]
            }
        case 'TODO_CLEAR':
            tempArr = tempArr.filter(item => !item.completed)
            return {
                list: [...tempArr]
            }
        default:
            return state;
    }
} 
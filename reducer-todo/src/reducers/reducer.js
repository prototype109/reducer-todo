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
    switch(action.type){
        case 'TODO_SELECT':
            let tempArr = {...state};
            tempArr = tempArr.list.map(item => {
                if(item.id === action.payload)
                    item.completed = !item.completed;
                
                return item;
            })
            return {
                list: [...tempArr]
            }
        default:
            return state;
    }
} 
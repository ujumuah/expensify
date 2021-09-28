 const expensesReducerDefault=[],
expensesReducer=(state=expensesReducerDefault,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
              return  [...state,action.expenses];
              case 'REMOVE_EXPENSE':
              return state.filter(({id})=> id !== action.id);
              case 'EDIT_EXPENSE':
              return state.map((x)=>{
                 if( action.id === x.id  ) return {...x,...action.update};
              })
     default:
         return state;
    }
};
export default expensesReducer;
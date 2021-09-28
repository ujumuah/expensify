 import {createStore,combineReducers as reducer} from 'redux'
 import expensesReducer from '../reducer/expense-reducer'
 import filterReducer from '../reducer/filter-reducer'

   export default ()=>{
     const store = createStore(
    reducer({
    expenses:expensesReducer,
    filter:filterReducer
}) 
 );   
 return store;
   }
 
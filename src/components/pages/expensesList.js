import React from 'react'
import {connect} from 'react-redux'
import  Item from './expensesListItems'
import selectVisibleItem  from '../../redux-sample/selector/visibleStore'
import ExpenseFilter from './expenseFilter' 
  
  export function expenseList(props) {
     return (
        <div>
            <h2>Expenses List</h2>
           <ExpenseFilter/>
             <ul>
                 {
                     props.expenses.length===0?
                        <li>No Expenses</li>
                    :
                props.expenses.map((x) =><Item key={x.id} {...x} />)
                 }
 
            </ul>
        </div>
    )
}
 const mapStateToProp = (state)=>{
        return{
         expenses:selectVisibleItem(state.expenses,state.filter)
     }
 },
  connectExpenseList=connect(mapStateToProp)(expenseList);

 export default connectExpenseList;
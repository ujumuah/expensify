import  React from 'react'
import {connect} from "react-redux"
import {addExpense}  from '../../redux-sample/actionGen/expenses'
import  Expenseform from './expenseForm'
     export class AddExpensePage extends React.Component{
      constructor(props){
          super(props);
          this.FormSubmit = this.FormSubmit.bind(this)
      }
      FormSubmit(expenses){
          // There is an high tendency that the error 
          // is coming from the disptch function
           this.props.FormSubmit(expenses)
          this.props.history.push('/')
      }
      render(){
          return (
            <div>
            <h1>ADD EXPENSES</h1>
              <Expenseform FormSubmit={this.FormSubmit}/>
       </div>
          )
      }
    }
 
const matchDispatchToprop =(dispatch)=>({
    FormSubmit:(expenses)=>dispatch(addExpense(expenses))
})
 
export default connect(undefined,matchDispatchToprop)(AddExpensePage);
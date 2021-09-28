import  React from 'react'
import {connect} from "react-redux"
import { editExpense}  from '../../redux-sample/actionGen/expenses'
import { removeExpense}  from '../../redux-sample/actionGen/expenses'
import  Expenseform from './expenseForm'
 export class A extends React.Component{
     constructor(props){
         super(props);
            this.editExpense = this.editExpense.bind(this)
            this.removeExpense = this.removeExpense.bind(this)

        }
        editExpense(expense){
            console.log(this.props)
             this.props.editExpense(this.props.expenses.id,expense)
            this.props.history.push('/')
        }
        removeExpense(){
            this.props.removeExpense(this.props.expenses.id)
            this.props.history.push('/')
        }
     render(){
         return(
            <div>
            <h1>Edit EXPENSES</h1>
        <Expenseform    
        FormSubmit={ 
         this.editExpense}
      expense={this.props.expenses}
      />
      <div><button onClick={(e)=>{
          e.preventDefault()
          this.removeExpense()
       }}>remove</button>
                      </div> 
          </div>
         )
     }
 }
const matchDispatchToProps =(dispatch)=>(
   {
       editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
       removeExpense:(id)=>{dispatch(removeExpense({id}))}
   } 
    
),
matchToProp =(state,props)=>{
const o = {
  expenses:state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
 return  o
 }
export default connect(matchToProp,matchDispatchToProps)(A);
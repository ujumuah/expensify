import {v4 as Id} from 'uuid'
 const addExpense=({
    id=Id(),
    description=''
    ,note='',
    amount=0,
    createAt=0
}={})=>{
     return {
         type:'ADD_EXPENSE',
         expenses:{
             id,description,note,amount,createAt
         }

     }
},
removeExpense =({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
      }
},
editExpense=(id,update)=>(
    {
        type:'EDIT_EXPENSE',
        id,
        update
    }
)
 ;
 export {addExpense,removeExpense,editExpense}
import { addExpense,removeExpense,editExpense} from '../../redux-sample/actionGen/expenses'
     // remove expenses test
    test('shouldm remove expense in the ui',()=>{
        const action = removeExpense({id:'123Abc'})
        expect(action).toEqual({
            type:'REMOVE_EXPENSE',
            id:'123Abc'
        })
    })
    // edit  expense
    test('edit the expense object displayed in the ui',()=>{
         const action = editExpense('123Abc',{note:'new note for testing'})
         expect(action).toEqual({
             type:'EDIT_EXPENSE',
             id:'123Abc',
             update:{note:'new note for testing'}
         })

    })
    // add expensewith value
    test(' add expense to the ui with value',()=>{
    const expenseData={
       description:'Rent',
      amount:550,
      note:'need moneyfor rent',
      createAt:2500
    },
    action=addExpense(expenseData);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expenses:{
            ...expenseData,
            id:expect.any(String)
        }
        })
    })
 
    test('testting for add expense defualt',()=>{
        const action = addExpense()
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expenses:{
                id:expect.any(String),
                description:'',
                note:'',
                amount:0,
                createAt:0
            }
        })
    })
import expensesReducer from '../../redux-sample/reducer/expense-reducer'
 const state =[
    {
        id:'1',
        description:'rent',
        note:'need to pay december rent',
        amount:1225,
        createAt:0
    },
    {
        id:'2',
        description:'mortgage',
        note:'need to pay december morgage',
        amount:1225,
        createAt:0
    }
]
test('testing for the validity of expense-reducer:ADD_EXPENSE',()=>{
    const action={
        type:"ADD_EXPENSE",
        expenses:{
            id:'1',
            description:'mortgage',
            note:'need to pay december morgage',
            amount:1225,
            createAt:0
        }
    }
    const result = expensesReducer([],action)
    expect(result).toEqual([{
        id:'1',
        description:'mortgage',
        note:'need to pay december morgage',
        amount:1225,
        createAt:0
    }])
})
test('testing for the validity of expense-reducer:REMOVE_EXPENSE',()=>{
    
    const action={
        type:"REMOVE_EXPENSE",
        id:'2'
    }
    const result = expensesReducer(state,action)
    expect(result).toEqual([{
        id:'1',
        description:'rent',
        note:'need to pay december rent',
        amount:1225,
        createAt:0
    }])
})
test('testing for the validity of expense-reducer:EDIT_EXPENSE',()=>{
    // action section
    const action={
        type:"EDIT_EXPENSE",
         id:'1',
         update:{
           note:'Urgently need to pay august rent',
            amount:5000,
         }
    }
    // reducer section
    const result = expensesReducer(state,action)
    expect(result).toEqual([{
        id:'1',
        description:'rent',
        note:'Urgently need to pay august rent',
        amount:5000,
        createAt:0
    },undefined])
})

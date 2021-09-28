  import store from './store/configStore';
   // INITIALIZATION SECTION 
  store.subscribe( ()=>{
      const state = store.getState()
  const visibleExpense = visibleExpenses(state.expenses,state.filter)
  })
   
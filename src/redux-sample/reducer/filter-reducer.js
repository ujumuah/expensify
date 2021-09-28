import  moment from 'moment'
 const filterReducerDefault={
     text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
},filterReducer=(state=filterReducerDefault,action)=>{
    switch(action.type){
        case 'EDIT_TEXT_EXPENSE':
          return {...state,text:action.text};
         case 'SORT_BY':
            return  {...state,sortBy:action.value};
            case 'START_DATE':
            return{...state,startDate:action.startDate};
             case 'END_DATE':
            return{...state,endDate:action.endDate};
     default:
         return state;
    }
}
;

export default filterReducer;               
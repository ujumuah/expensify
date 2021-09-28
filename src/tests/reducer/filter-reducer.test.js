import moment from 'moment' 
 import filterReducer from '../../redux-sample/reducer/filter-reducer'
 const state={
        text:'',
       sortBy:'date',
       startDate:0,
       endDate:0
    }
    test('testing the validity of filter-reducer:EDIT_TEXT_EXPENSE',()=>{
        const  action={
            type:'EDIT_TEXT_EXPENSE',
            text:'Wanted'
        }
        const result = filterReducer(state,action)
        expect(result).toEqual({...state,text:action.text})
    })

    test('testing the validity of filter-reducer:SORT_BY',()=>{
        const  action={
            type:'SORT_BY',
            value:'date'
        }
        const result = filterReducer(state,action)
        expect(result).toEqual({...state,sortBy:action.value})
    })
    test('testing the validity of filter-reducer:START_DATE',()=>{
        const  action={
            type:'START_DATE',
            startDate:10000
        }
        const result = filterReducer(state,action)
        expect(result).toEqual({...state,startDate:action.startDate})
    })
    test('testing the validity of filter-reducer:DEFUALT',()=>{
        const filterReducerDefault={
            text:'',
               sortBy:'date',
               startDate:moment().startOf('month'),
               endDate:moment().endOf('month')
       }
    const action ={
        type:'DEFAULT'
    }
        const result = filterReducer(filterReducerDefault,action)
        expect(result).toEqual(filterReducerDefault)
    })

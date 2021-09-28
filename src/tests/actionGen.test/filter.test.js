import {textFilter,sortByDate,sortByAmount,startDate,endDate} from '../../redux-sample/actionGen/filter'
import moment from 'moment' 
// start date
test('5hould generate  the start date action object',()=>{
    const action =  startDate(moment(0))
    expect(action).toEqual({
        type:'START_DATE',
        startDate:moment(0)
    })
 })
// end date
test('should generate the end date action object',()=>{
    const action = endDate(moment(0));
    expect(action).toEqual(
    {type:'END_DATE',
        endDate:moment(0)
    }
    )
})
// test for text filter
test('should generate text filter action object',()=>{
    const action  = textFilter('Rent');
    expect(action).toEqual({
        type:'EDIT_TEXT_EXPENSE',
        text:'Rent'
    })
})
// test for text filter Default 
test('should generate text filter action object without value',()=>{
    const action  = textFilter();
    expect(action).toEqual({
        type:'EDIT_TEXT_EXPENSE',
        text:''
    })
})      
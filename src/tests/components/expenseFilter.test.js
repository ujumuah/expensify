import React from 'React'
import {Text as ExpenseFilter} from '../../components/pages/expenseFilter'
import {shallow} from 'enzyme'
import  {altFilter,filter} from '../expenses/sample2'
import moment from 'moment'

let wrapper,textFilter,sortByAmount,sortByDate,setStartDate,setEndDate; 
beforeEach(()=>{
 textFilter =jest.fn()
 sortByAmount=jest.fn()
sortByDate =jest.fn()
setStartDate =jest.fn()
setEndDate =jest.fn()
wrapper = shallow(
<ExpenseFilter
 filter={altFilter}
 textFilter ={textFilter}
 sortByAmount ={sortByAmount}
 sortByDate={sortByDate}
 setStartDate ={setStartDate}
 setEndDate ={setEndDate}
/>)
})
test('should render expense filter  with no value',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should  render expense filter with value',()=>{
    wrapper.setProps({
        filter:filter
    })
    expect(wrapper).toMatchSnapshot()
  })
  test('should handle text change',()=>{
       wrapper.find('input').simulate('change',{
           target:{
               value:'rent'
           }
       })
         expect(textFilter).toHaveBeenLastCalledWith('rent')
  })
  test('should sortByDate',()=>{
    wrapper.setProps({
        filter:filter
    })
  wrapper.find('select').simulate('change',{
      target:{
          value:'date'
      }
  })
   expect(sortByDate).toHaveBeenLastCalledWith('date')
})
test('should sortByAmount',()=>{
    wrapper.setProps({
        filter:altFilter
    })
  wrapper.find('select').simulate('change',{
      target:{
          value:'amount'
      }
  })
   expect(sortByAmount).toHaveBeenLastCalledWith('amount')
})
test('should  handle set StartDate',()=>{
  const startDate  = moment().add(4,'days') 
  const endDate  = moment().add(8,'days') 

  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
test('should sortByDate',()=>{
    const calenderFocused = null
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})
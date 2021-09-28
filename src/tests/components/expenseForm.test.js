 import React from 'React'
 import ExpenseForm from '../../components/pages/expenseForm'
import {shallow} from 'enzyme'
import  data from '../expenses/samples'
import moment from 'moment'
test('Should render form correctly',()=>{
 const wrapper = shallow(<ExpenseForm/>)    
expect(wrapper).toMatchSnapshot()
})
test('should render form with  data correctly',()=>{
    const wrapper = shallow(<ExpenseForm expense={data[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

// stmulating in jest 101
// 1 render the form with shallow render
//  find the  form tag with find() method 
// add the method simulate  and the args ==  the event of ones choice
test('Should render error message when input data is invalid',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{ }
    })
   expect(wrapper.state('error').length).toBeGreaterThan(0)
 })
test('Should align  input field  with the description state',()=>{
    const value="Coffe";
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
     expect(wrapper.state('description')).toBe(value)
})
test('Should align  textarea with the note state',()=>{
    const value="text area sample";
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
     expect(wrapper.state('notes')).toBe(value)
})
test('Should align input with  the amount state:undefined||invalid data',()=>{
     const wrapper  = shallow(<ExpenseForm/>)
     wrapper.find('input').at(1).simulate('change',{
         target:{value:undefined}
     })
     expect(wrapper.state('input')).toBe(undefined)
})
test('Should align input with  the amount state:data',()=>{
    const value='19.25';
    const wrapper  = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('Form shoould submit  input data to  props',()=>{
    const onSumbitSpy = jest.fn()
 const wrapper = shallow(<ExpenseForm expense={data[1]} FormSubmit={onSumbitSpy}/>)
 expect(wrapper.state('error')).toBe('')
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  })
   expect(onSumbitSpy).toHaveBeenLastCalledWith({
      description:data[1].description,
      amount:data[1].amount,
      note:data[1].note,
      createAt:data[1].createAt 
  })
})
test('Should check if create key in State is  equal to the moment object',()=>{
    const now =moment(0)
    const wrapper  = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})
test('checking if the calender Value is Exact or syn with calenderFocuse',()=>{
    const focused = true;
  const  wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toBe(focused) 

})
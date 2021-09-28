import React from 'react'
import {shallow} from 'enzyme'
import {expenseList as Expenses} from '../../components/pages/expensesList'
import  expensesSample from  '../expenses/samples'
test('should render expenseList with expensesSamples value',()=>{
 const wrapper  = shallow(<Expenses expenses={expensesSample}/>)
 expect(wrapper).toMatchSnapshot()
})
test('should render expenseList with  No expenses message',()=>{
    const wrapper = shallow(<Expenses expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})
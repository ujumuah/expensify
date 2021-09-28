import React from 'react'
import {shallow} from 'enzyme'
import Items from '../../components/pages/expensesListItems'
import  expensesSample from  '../expenses/samples'
test('should render Items with expensesSaple data',()=>{
    const wrapper = shallow(<Items {...expensesSample[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
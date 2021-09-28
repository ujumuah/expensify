import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/pages/create'
import expenses from '../expenses/samples'
 let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});


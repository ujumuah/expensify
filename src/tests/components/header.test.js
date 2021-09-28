import Navlink from '../../components/navlink'
import React from 'react'
import {shallow} from 'enzyme'

test('it should render navlink correctly',()=>{
const render  =  shallow(<Navlink/>)
 expect(render).toMatchSnapshot()
})
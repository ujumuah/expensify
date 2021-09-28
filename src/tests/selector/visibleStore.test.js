import moment from "moment"
import  visibleSelector from '../../redux-sample/selector/visibleStore'
// test sample
const  expenses =[{
    id:'1',
    description:'Morgage',
    note:'',
    amount:2500,
    createAt:moment(0).valueOf()
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:500,
    createAt:moment(0).subtract(14,'days').valueOf()
},{
    id:'3',
    description:'Electricity',
    note:'',
    amount:100,
    createAt:moment(0).add(10,'days').valueOf()
}]
test('testing for validity of text filter',()=>{
   const filter={
    text:"i"
    ,sortBy:"date"
    ,startDate:0
    ,endDate:0
}
const result = visibleSelector(expenses,filter)
expect(result).toEqual([expenses[2]])
})

test('testing for the validity of  startDate',()=>{
    const filter={
        text:""
        ,sortBy:"date"
        ,startDate:moment(0)
        ,endDate:undefined
    }
const result  = visibleSelector(expenses,filter)
 expect(result).toEqual([expenses[0],expenses[2]])
})
test('testing for the validity of  endDate',()=>{
    const filter={
        text:""
        ,sortBy:"date"
        ,startDate:undefined
        ,endDate:moment(0)
    }
const result  = visibleSelector(expenses,filter)
 expect(result).toEqual([expenses[1],expenses[0]])
})
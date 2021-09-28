import React from 'react'
import moment from 'moment'
import {connect}from 'react-redux'
import{Link}  from 'react-router-dom'
import {removeExpense} from '../../redux-sample/actionGen/expenses'
const items  =({id,description,amount,createAt})=>(
<div>
     <Link to={`/edit/${id}`}>
    <h4>Expense:{description}</h4>
    </Link>
<div>Amount:{amount}</div>
<div>Created on :{moment(createAt).format('DD-MMM-YYYY')}</div>
</div>

)
export default items;
  
import React from 'react'
import {connect} from 'react-redux'
import {textFilter,sortByAmount,sortByDate,startDate as setStartDate,endDate as setEndDate, startDate} from '../../redux-sample/actionGen/filter'
import {DateRangePicker} from 'react-dates'

 export class Text extends React.Component{
   constructor(props){
      super(props);
      this.state={
         calenderFocused:null
      }
      this.onDatesChange= this.onDatesChange.bind(this)
      this.onFocusChange =this.onFocusChange.bind(this)
      this.textChange = this.textChange.bind(this)
      this.selectChange = this.selectChange.bind(this)
   }
   onDatesChange({startDate,endDate}){
       this.props.setStartDate(startDate)
      this.props.setEndDate(endDate)
   }
   onFocusChange(calenderFocused){
      this.setState({calenderFocused})
   }
   textChange(e){
      this.props.textFilter(e.target.value)
   }
   selectChange(e){
       const target = e.target.value
      if(target==='amount'){
          this.props.sortByAmount(target);
      }else if(target==='date')
            this.props.sortByDate(target);
  }
   render(){
      return(
         <div>
         <input type="text"
       value={this.props.filter.text} 
       onChange={this.textChange}/>
       <select value={this.props.filter.sortBy} onChange={this.selectChange}>
         <option value="date">Date</option>
         <option value="amount">Amount</option>
       </select>
          <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate} 
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
         isOutsideRange={()=>false}
         numberOfMonths={1}
         showClearDates={true}
          />
    </div>
     
)
}
}
const mapStateToProp=(state)=>{
   return{ filter:state.filter}
  },
  mapDispatchToprops =(dispatch)=>({
     textFilter:(text)=>dispatch(textFilter(text)),
      setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
      setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
      sortByAmount:(value)=>dispatch(sortByAmount(value)),
      sortByDate:(value)=>dispatch(sortByDate(value))

   })
 

  export default  connect(mapStateToProp,mapDispatchToprops)(Text)
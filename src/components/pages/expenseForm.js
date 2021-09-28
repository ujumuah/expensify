import React ,{Component}from "react"
import  moment from 'moment'
import {SingleDatePicker} from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'

   class a extends Component{
      constructor(props){
           super(props);
           this.state={
                description: !!props.expense?props.expense.description:'',
               notes:!!props.expense?props.expense.note:'',
               amount:!!props.expense?props.expense.amount:'',
               error:'',
               calenderFocused:false,
                createdAt:!!props.expense?moment(props.expense.createAt):moment()
           }, 
          this.onDescription = this.onDescription.bind(this)
          this.onNote = this.onNote.bind(this)
          this.onAmountChange = this.onAmountChange.bind(this)
           this.onDateChange = this.onDateChange.bind(this)
           this.formSubmit = this.formSubmit.bind(this)
           this.onCalenderFocus = this.onCalenderFocus.bind(this)
       }
       onCalenderFocus({focused}){
         this.setState(()=>({calenderFocused:focused}))
       }
      onDescription(e){
          const description=e.target.value;
          this.setState(()=>({description}))
      }
       onNote(e){
          const notes=e.target.value;
          this.setState(()=>({notes}))
      }
    onAmountChange(e){
        const amount = e.target.value
          if (!amount || /^\d{1,}(\.\d{0,2})?$/.test(amount)){
            this.setState(()=>({amount}))
        }
      }
      onDateChange(createdAt){
       this.setState(()=>({createdAt}))
    }
       formSubmit(e){
           e.preventDefault();
             if(!!!this.state.description&&!!!this.state.amount){
                this.setState(()=>({error:'please insert  description and amount'}))
             }else{
                this.setState(()=>({error:''}))
            this.props.FormSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount),
                note:this.state.notes,
                createAt:this.state.createdAt.valueOf(),

            })
            }
       }
        
     
      render(){

          return(
              
              <div>
                 {!!this.state.error&& <h4 className='error'>{this.state.error}</h4>}
              <form onSubmit={(e)=>{this.formSubmit(e)}}>
                <label>
                Description:
                    <input type="text" name='description' placeholder='Description' 
                    value={this.state.description }
                     onChange={(e)=>{this.onDescription(e)}} required='required'/>
                </label>
                <label>
                Amount:
                    <input type="text"
                     name='Amount'
                     onChange={(e)=>{this.onAmountChange(e)}}
                     placeholder='Amount'
                     autoFocus
                     value={this.state.amount}
                     required='required'/>
                </label>
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onCalenderFocus}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                 />             
                <textarea  value={this.state.notes}
                required='required'
                 onChange={(e)=>{this.onNote(e)}} placeholder="Explain a litte about the expenses"></textarea>
              <input type='submit' value='Add expense'/>
              </form>
             </div>
          )

      }
  }
  
       
 export  default a;
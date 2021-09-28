import moment from 'moment'
export  default (expenses,{text,sortBy,startDate,endDate})=>{ 
     return  expenses.filter((expenses)=> {
          const createAtMoment  = moment(expenses.createAt)
          const  startDateMatch =  startDate?startDate.isSameOrBefore(createAtMoment,'day'): true;
         const  endDateMatch = endDate? endDate.isSameOrAfter(createAtMoment,'day'):true;
         const  textMatch =  expenses.description.toLowerCase().includes(text.toLowerCase())
         return startDateMatch&&endDateMatch&&textMatch}).sort((x,z)=>{
             if(sortBy ==='date'){
                 return x.createAt<z.createAt?-1:1;
             }else{
                         return x.createAt<z.createAt?1:-1;         
             }
         })
   };
    
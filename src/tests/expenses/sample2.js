import moment from 'moment'
export const filter ={
      text:'rent',
      sortBy:'date',
      startdate:moment(0).add(3,"days"),
      endDate:moment(0).add(7,"days"),
       
  }
  export  const altFilter={
    text:'',
    sortBy:'amount',
    startdate:undefined,
    endDate:undefined,
    createAt:0   
  }
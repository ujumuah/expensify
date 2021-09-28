const textFilter=(text='')=>({
    type:'EDIT_TEXT_EXPENSE',
    text
}),
 sortByDate=(value)=>({
     type:'SORT_BY',
     value
 }),
 sortByAmount=(value)=>({
      type:'SORT_BY',
     value
 }),
 startDate=(startDate)=>({
     type:'START_DATE',
     startDate
 }),
 endDate=(endDate)=>({
     type:'END_DATE',
     endDate
 });
 export {textFilter,sortByDate,sortByAmount,startDate,endDate}
   
import {createStore} from "redux"
 

 const i =({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
 };
 const d =({decrementBy=1}={})=>{
     return{
         type:'DECREMENT',
         decrementBy
     }
 };
 const r =({reset=0}={})=>{
    return{
        type:'RESET',
        reset
    }
};
const s =({set=5}={})=>({
    type:'SET',
    set
})

const reducer =(state={
    count:0
},
action
)=>{
    switch(action.type){
        case 'SET':
            return{
                count:action.set
            };
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            };
            case 'DECREMENT':
                return{
                    count:state.count-action.decrementBy
                };
                case 'RESET':
                    return{
                        count:action.reset
                    };
                    default:
                        return state;
    }
 };
const store = createStore(reducer)



 store.subscribe(()=>{
     console.log(store.getState())
 })
 const dispatch = store.dispatch;
 dispatch(i({incrementBy:5}))
  dispatch(d({d:1}))
 dispatch(r())
 dispatch(s({set:10}))
 
class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
        count:0
                 }
    this.add =this.add.bind(this);
    this.reset =this.reset.bind(this);
    this.minus =this.minus.bind(this);

}
// 
componentDidMount(){
    console.log("testing")
    const value =parseInt(localStorage.getItem("count"),10  ) 
     if(!isNaN(value)){
            this.setState(()=>({count:value}))

    }
}
componentDidUpdate(prevProps,prevState){
    localStorage.setItem("count",this.state.count)
}
add(e){
    e.preventDefault()
    this.setState((prev)=>({count:prev.count+1}))
}
minus(e){
    e.preventDefault()
    this.setState((prev)=>({count:prev.count-1}))
}
reset(e){
    e.preventDefault()
    this.setState(()=>({count:0}))
}
    render(){
         return(
            <Counter
            count={this.state.count}
            add={this.add}
            minus={this.minus}
            reset={this.reset}
            />
        )
    }
}
const Counter=(props)=>{
    return(
        <div>
            <h1>{props.headline}</h1>
            <h2>Count:{props.count}</h2>
            <button onClick={props.add}>+1</button>
            <button onClick={props.minus}>-1</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}
Counter.defaultProps={
    headline:"Counter-app"
}
ReactDOM.render(<CounterApp/>,document.getElementById("app"))
import { PureComponent } from "react";
import Child from "../Child/child";

class Parent extends PureComponent{
    constructor(){
        super()
        this.state={
            username:"sree",
            count:0
        }
    }
    render(){
        return(
            <>
            <div>
                hello from parent
                
                {console.log("this is from parent")}<br></br>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>
                <button onClick={()=>this.setState({username:"bhanu"})}>change name</button>
                <h5>{this.state.count}</h5>
                <Child val={this.state.username}/>
                
            </div>
            </>
        )
    }

}
export default Parent
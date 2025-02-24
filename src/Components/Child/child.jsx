import { Component } from "react";
import React,{PureComponent} from "react";

class Child extends PureComponent{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <div>
                this is from child
                {console.log("child component")}
              <h1> {this.props.val}</h1> 
            </div>
            </>
        )
    }

}
export default Child
import React, {Component} from "react";
import WithCounter from "./WithCounter";


export class ClickCounter extends Component{
   

    render() {
        
        const {count, incrementCount} = this.props
        return(
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}
export default WithCounter(ClickCounter) 
import { Component } from "react";
import ItemCount from "../components/ItemCount";
import CounterDisplay from "./DisplayCount";


class ContainerCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1
          }
          this.increment = this.increment.bind(this)
          this.decrement = this.decrement.bind(this)

        }

        increment() {
            this.setState({number : this.state.number - 1})
        }

        decrement() {
            this.setState({number : this.state.number + 1})
        }


    render() {
        return (
            <div>
                
                <ItemCount onIncrement = { this.increment } onDecrement= { this.decrement } />
                <CounterDisplay number = {this.state.number} />
            </div>
        )}
    
    }

    export default ContainerCount;
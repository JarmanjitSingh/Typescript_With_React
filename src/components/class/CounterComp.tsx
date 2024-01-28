import { Component } from 'react'

type CounterProps = {
    message: string
}

type StateType = {
    count: number
}

export default class CounterComp extends Component<CounterProps, StateType> {
    state = {
        count: 0
    }

    handleClick = () =>{
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

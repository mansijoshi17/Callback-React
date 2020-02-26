import React from 'react';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    render() {
        return (
            <div className="counter">
                {/* We pass count and Increase, Dicrese as callback and as a props */}
                <PlusButton count={this.state.count} Increase={(count) => this.setState({ count })} />
                {/* In Increase function its take count argument which we get from callback  function of child component and set new value in state. */}
                <p style={{margin:'8px'}}>{this.state.count}</p>
               <MinusButton count={this.state.count} Dicrese={(count) => this.setState({ count })} />
            </div>
        )
    }
}

export default Counter;
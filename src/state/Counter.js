import React from 'react'

class Counter extends React.Component {
    
    static defaultProps = {
        step: 1
    }
    state = {
        count: 0
    };

    handleButtonclick = () => {
        const newCount = this.state.count + this.props.step;
        this.setState({
            count: newCount
        })
    }

    render() {
    
        return (
        <div>
            <p>The current count: {this.state.count}</p>
            <button
                onClick={this.handleButtonclick}>
                Add {this.props.step}
            </button>
        </div>
        )
    }
}

export default Counter;
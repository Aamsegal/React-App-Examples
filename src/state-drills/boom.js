import React from 'react';

class Boom extends React.Component {
    state = { count: 0};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
               count: this.state.count + 1
           })
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const {count} = this.state

        if (count === 8) {
            this.state.count = 0;
            return 'Boom'
        }
        else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
            <div>{this.renderDisplay()}</div>
          )
    }
}


export default Boom
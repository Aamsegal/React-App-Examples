import React from 'react';

let newWord = '';
class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in constructors')
        super(props)
        this.state = {
          count: 'world'
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
      }
    
    
    
    handleButtonClick = (i) => {
        if (i === 0) {
            newWord = 'friend'
        }   else if (i === 1) {
            newWord = 'world'
        }   else {
            newWord = 'react'
        }
        this.setState ({
            count: newWord
        })
    }

    render() {
      return (
        <div>
          <p>Hello {this.state.count}</p>
          <button onClick={() => this.handleButtonClick(0)}>
            friend
          </button>

          <button onClick={() => this.handleButtonClick(1)}>
            world
          </button>

          <button onClick={() => this.handleButtonClick(2)}>
            react
          </button>
        </div>
      )
    }
  }

export default HelloWorld
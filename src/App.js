import React, { Component } from 'react';
import './App.css';
import Messages from './Message';
import TheDate from './State/TheDate';
import Counter from './State/Counter'
import HelloWorld from './state-drills/Hello-World';
import Boom from './state-drills/boom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter />
        <Counter count={123}/>
        <HelloWorld />
        <Boom />

      </div>
    );
  }
}

export default App;
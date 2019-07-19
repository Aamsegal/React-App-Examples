import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const a = [1,2,3,4];

function iterate(array) {
    if (array.length === 0) {
        return 'finish';
    }
    console.log(array[array.length - 1]);
    array.pop();
    iterate(array)
}


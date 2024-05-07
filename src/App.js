import React, { useContext } from 'react';
import './App.css';
import Counter from './Counter';
import { CounterContext } from './context/Counter'

function App() {
    const counterContext = useContext(CounterContext);

    return (
        <div className="App">
            <h1>Count is {counterContext.count}</h1>
            <Counter />
        </div>
    );
}

export default App;

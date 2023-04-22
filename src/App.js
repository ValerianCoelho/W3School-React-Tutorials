import React from 'react'
import { useState, createContext, useContext } from 'react';

const myContext = createContext();

function App(){
    const [userName, setName] = useState('Valerian');

    return (
        <myContext.Provider value={userName}>
            <h1>Hello {userName}</h1>
            <Component1 />
        </myContext.Provider>
    );
}

function Component1(){
    return (
        <>
            <h1>Hello</h1>
            <Component2 />
        </>
    );
}

function Component2(){
    return (
        <>
            <h1>Hello</h1>
            <Component3 />
        </>
    );
}

function Component3(){
    const userName = useContext(myContext);

    return (<h1>Hello {userName} again</h1>);
}

export default App;
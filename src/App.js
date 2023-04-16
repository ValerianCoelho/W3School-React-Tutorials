import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'

function App(){
    const [items, setItems] = useState([])
    const [resourceType, setResourceType] = useState('posts');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
        <>
        <div>
            <button onClick={()=> setResourceType('posts')}>Posts</button>
            <button onClick={()=> setResourceType('users')}>Users</button>
            <button onClick={()=> setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => <p>{JSON.stringify(item)}</p>)}
        </>
    );
}

export default App;
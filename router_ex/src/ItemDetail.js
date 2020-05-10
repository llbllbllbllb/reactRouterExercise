import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Item({match}) {

    useEffect(() =>{
        fetchItem();
        console.log(match);
    },[]);

    const [item,setItem] = useState([]);

    const fetchItem = async () => {
        const repo = await fetch(`https://api.github.com/repositories/${match.params.id}`);
        const data = await repo.json();

        console.log(data);
        setItem(data);
    }


    return (
        <div className="App">
            <h1>{item.name}</h1>
            <p>{item.url}</p>
        </div>
    );
}

export default Item;

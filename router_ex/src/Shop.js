import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {

    useEffect(() =>{
        fetchItems();
    },[]);

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(' https://api.github.com/users/llbllbllbllb/repos');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }


    return (
        <div className="App">
            <h1>Shop Page</h1>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.name}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;

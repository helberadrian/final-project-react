import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemDetailContainer from "../itemDetailContainer/index"
import './styles.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
        setProducts(res.data)
        );
    }, []);

    console.log(products);

    return (
        <div className="productList">
        {products.map((product) => {
            return (
            <div className="productBox">
                <p>{product.name}</p>
                <p>{product.username}</p>
                <Link to={`/product/${product.id}`}>
                    <ItemDetailContainer key={product.id} data={product} />
                </Link>
            </div>
            );
        })}
        </div>
    );
};

export default ItemListContainer;
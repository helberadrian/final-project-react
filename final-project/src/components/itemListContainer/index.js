import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemDetailContainer from "../itemDetailContainer/index"
import './styles.css';

const ItemContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
        setProducts(res.data)
        );
    }, []);

    return (
        <div>
        {products.map((product) => {
            return (
            <Link to={`/detail/${product.id}`}>
                <ItemDetailContainer key={product.id} data={product} />
            </Link>
            );
        })}
        </div>
    );
};

export default ItemContainer;
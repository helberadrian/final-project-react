import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import ItemDetailContainer from "../../components/itemDetailContainer/index"

const Product = () => {
    const [product, setProduct] = useState({});

    let { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        setProduct(res.data)
        );
    }, [id]);

    return (
        <div className="productDetail">
            <div key={product.id}>
                <ItemDetailContainer data={product} />
            </div>
        </div>
    );
};

export default Product;
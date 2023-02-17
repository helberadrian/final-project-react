import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ItemDetailContainer from "../../components/itemDetailContainer/index"

const Product = () => {
    const [product, setProduct] = useState({});

    const id = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id.productId}`).then((res) =>
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
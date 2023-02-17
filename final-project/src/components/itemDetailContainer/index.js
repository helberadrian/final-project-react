import React from "react";
import './styles.css';

const ItemDetailContainer = ({data}) => {
    return (
        <div className="productBox">
            <p>{data.name}</p>
            <p>{data.username}</p>
        </div>
    );
};

export default ItemDetailContainer;
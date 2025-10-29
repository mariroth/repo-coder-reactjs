import './ItemDetailContainer.css';
import { useState, useEffect } from "react";
import getProducts from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts().then((data) => {
        const dataProduct = data.find((product) => product.id === parseInt(id));
        setProduct(dataProduct);
        })
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="detail-container">
            {
                loading ? <div className="loading">Cargando detalle del producto...</div> : <ItemDetail product={product} />
            }
    </div>
    );
};

export default ItemDetailContainer;

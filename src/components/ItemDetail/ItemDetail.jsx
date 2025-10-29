
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    return (
    <div className="detail">
        <img src={product.image} alt={product.name} />

        <div className="detail-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Cepa: {product.cepa}</h3>
            <h3>Bodega: {product.marca}</h3>
            <h3>El stock actual es de {product.stock} unidades</h3>
            <h2>Precio: ${product.price}</h2>
        </div>
    </div>
    );
};

export default ItemDetail;

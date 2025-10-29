
import './ItemListContainer.css';
import getProducts from '../../data/products.js';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx'; 
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [ loading,  setLoading] = useState(true);
    const { category } = useParams ();
    useEffect(()=>{
        setLoading(true);

        getProducts()
        .then((data) => {
            if(category) {
                const productsFilter = data.filter((product)=> product.category === category);
                setProducts(productsFilter);
            }else{
                setProducts(data); 
            }
    }) 
    .finally(()=> {
        setLoading(false);
    })
    }, [category])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            {
                loading ? <div> Cargando...</div> : <ItemList products={products}/>
            }
            
        </div>
    )
}

export default ItemListContainer;

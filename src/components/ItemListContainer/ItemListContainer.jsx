
import './ItemListContainer.css';
// import getProducts from '../../data/products.js';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx'; 
import { useParams } from "react-router-dom";
import{collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [ loading,  setLoading] = useState(true);
    const { category } = useParams ();
    const productRef = collection(db, "products");

    const getProducts = async() => {
        try {
            const dataDb = await getDocs(productRef);
            const data = dataDb.docs.map((productDb) => {
                return{ id: productDb.id, ...productDb.data() };
            })
            setProducts(data);
        } catch (error) {
            console.log (error) 
        } finally {
            setLoading(false);
        }
    }

    const getProductsByCategory = async() => {
        try {
           const q = query(productRef, where("category", "==", category));
            const dataDb = await getDocs(q);
            const data = dataDb.docs.map((productDb) => {
                return{ id: productDb.id, ...productDb.data() };
            });
            setProducts(data);

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }


    useEffect (()=> {
        if(category){
            getProductsByCategory();
        }else{
            getProducts();
        }
    }, [category]);

    // useEffect(()=>{
    //     setLoading(true);

    //     getProducts()
    //     .then((data) => {
    //         if(category) {
    //             const productsFilter = data.filter((product)=> product.category === category);
    //             setProducts(productsFilter);
    //         }else{
    //             setProducts(data); 
    //         }
    // }) 
    // .finally(()=> {
    //     setLoading(false);
    // })
    // }, [category])

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

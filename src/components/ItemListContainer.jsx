import Item from "./Item";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ItemListContainer = ({ addToCart }) => {
const [products, setProducts] = useState();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);

    const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        // Simulación de todos los productos
        const allProducts = [
        {
            id: 1,
            title: "Proteina",
            category: "Proteinas",
            price: 49.999,
            image: "/public/images/proteina1.jpg",
        },
        {
            id: 2,
            title: "Creatina",
            category: "Creatianas",
            price: 30.000,
            image: "/public/images/creatina.jpg",
        },
        {
            id: 3,
            title: "Pre-entreno",
            category: "Pre-Entrenos",
            price: 25.000,
            image: "/public/images/pre entreno 2.jpg",
        },
        {
            id: 4,
            title: "Vitamina",
            category: "Vitaminas",
            price: 20.000,
            image: "/public/images/vitamina.jpg",
        },
        ];

        setTimeout(() => {
        if (allProducts.length > 0) {
            resolve(allProducts);
        } else {
            reject("No se encontraron productos.");
        }
        }, 1200); // Simulación de 1.2 segundos de retardo
    });
    };

    getAllProducts()
    .then((data) => {
        setProducts(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err);
        setLoading(false);
    });
  }, []); // Agregar array vacío de dependencias

if (loading) {
    return <div>Cargando productos...</div>;
}

if (error) {
    return <div>Error al cargar los productos: {error}</div>;
}

return (
    <div>
    <h2>Todos los Productos</h2>
    <div className="product-list">
        {products.length > 0 && 
            products.map(product => (
                <Item 
                    key={product.id} 
                    product={product} 
                    addToCart={addToCart}
                />
            ))
        }
    </div>
    </div>
);
};

ItemListContainer.propTypes = {
    addToCart: PropTypes.func
};

export default ItemListContainer;

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'; // Importa el componente ItemList

const ItemListContainer = () => {
const { categoryId } = useParams();
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);

    const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        // Simulación de la base de datos de productos
        const allProducts = [
        { id: 1, title: "Proteina", category: "Proteinas", price: 49.999, image: "/public/images/proteina1.jpg", stock: 10 },
        { id: 2, title: "Creatina", category: "Creatianas", price: 30.000, image: "/public/images/creatina.jpg", stock: 5 },
        { id: 3, title: "Pre-entreno", category: "Pre-Entrenos", price: 25.000, image: "/public/images/pre entreno 2.jpg", stock: 8 },
        { id: 4, title: "Vitamina", category: "Vitaminas", price: 20.000, image: "/public/images/vitamina.jpg", stock: 12 },
        ];

        setTimeout(() => {
        const filteredProducts = category
            ? allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
            : allProducts;

        if (filteredProducts.length > 0) {
            resolve(filteredProducts);
        } else {
            reject(category ? `No se encontraron productos para la categoría: ${category}` : "No se encontraron productos.");
        }
        }, 1200); // Simulación de 1.2 segundos de retardo
    });
    };

    getProducts(categoryId)
    .then((data) => {
        setProducts(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err);
        setLoading(false);
    });
}, [categoryId]);

if (loading) {
    return <div className="d-flex justify-content-center">Cargando productos...</div>;
}

if (error) {
    return <div className="alert alert-danger" role="alert">Error al cargar los productos: {error}</div>;
}

return (
    <div className="container mt-4">
    <h2>{categoryId ? `Productos de la categoría: ${categoryId}` : 'Todos los Productos'}</h2>
      <ItemList products={products} /> {/* Renderiza el componente ItemList y le pasa la lista de productos */}
    </div>
);
};

export default ItemListContainer;
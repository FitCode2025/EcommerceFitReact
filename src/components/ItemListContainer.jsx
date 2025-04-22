import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const productCollection = collection(db, "Productos");

        getDocs(productCollection)
            .then((res) => {
                const allProducts = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Si hay categoría, filtra. Sino, muestra todos.
                const filtered = categoryId
                    ? allProducts.filter(product => product.category.toLowerCase() === categoryId.toLowerCase())
                    : allProducts;

                setFilteredProducts(filtered);
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
                setError("No se pudieron cargar los productos.");
            })
            .finally(() => setLoading(false));
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
            <ItemList products={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;

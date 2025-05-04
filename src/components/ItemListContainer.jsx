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
        return (
            <div className="container mt-5">
                <h2 className="mb-4">Cargando productos...</h2>
                <div className="row">
                    {[...Array(6)].map((_, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" aria-hidden="true">
                                <div className="card-img-top bg-secondary" style={{ height: '200px', opacity: 0.5 }}></div>
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
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
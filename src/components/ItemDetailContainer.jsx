import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const getProductById = (id) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const foundProduct = products.find(
                        (prod) => prod.id === parseInt(id)
                    );
                    resolve(foundProduct || null);
                }, 1000);
            });
        };

        getProductById(itemId)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });

    }, [itemId]);

    if (loading) {
        return <div>Cargando detalles del producto...</div>;
    }

    if (error) {
        return <div>Error al cargar los detalles del producto: {error}</div>;
    }

    return (
        <div>
            <h2>Detalle del Producto</h2>
            {product && <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
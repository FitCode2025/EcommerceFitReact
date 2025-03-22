import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);

    const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        // Simulación de todos los productos para buscar por ID
        const allProducts = [
        {
            id: 1,
            title: "Proteina",
            category: "Proteinas",
            price: 49.99,
            image: "/public/images/proteina1.jpg",
            description: "Excelente suero de proteina aislada para una mejor asimilacion.",
        },
        {
            id: 2,
            title: "Creatina",
            category: "Creatianas",
            price: 30.00,
            image: "/public/images/creatina.jpg",
            description: "Monohidrato de creatina ideal para la recuperacion muscular y energia",
        },
        {
            id: 3,
            title: "Pre-entreno",
            category: "Pre-Entrenos",
            price: 40.00,
            image: "/public/images/pre entreno 2.jpg",
            description: "Potente pre-entreno para entrenamientos intensos",
        },
        {
            id: 4,
            title: "Vitamina",
            category: "Vitaminas",
            price: 20.00,
            image: "/public/images/vitamina.jpg",
            description: "Vitamina para mejorar la salud y el bienestar",
        },
        ];

        setTimeout(() => {
        const foundProduct = allProducts.find(
            (prod) => prod.id === parseInt(id)
        );
        if (foundProduct) {
            resolve(foundProduct);
        } else {
            reject(`Producto con ID ${id} no encontrado.`);
        }
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

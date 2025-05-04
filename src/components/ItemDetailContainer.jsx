// src/components/ItemDetailContainer.jsx
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../service/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchProduct = async () => {
    try {
        const docRef = doc(db, "Productos", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
        console.log("No se encontró el producto.");
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
    } finally {
        setLoading(false);
    }
    };

    fetchProduct();
}, [itemId]);

if (loading) return <div className="text-center">Cargando...</div>;
if (!product) return <div className="text-center">Producto no encontrado</div>;

return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

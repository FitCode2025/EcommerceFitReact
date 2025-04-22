import PropTypes from 'prop-types';
import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../Context/useCart';

function ItemDetail({ product }) {
const [addedToCart, setAddedToCart] = useState(false);
const { addToCart } = useCart();

const handleAddToCart = (quantity) => {
    addToCart({ ...product, quantity });
    setAddedToCart(true);
};

if (!product) {
    return <p className="alert alert-info">No se ha seleccionado ningún producto.</p>;
}

return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
        {product.image && <img src={product.image} alt={product.title} className="img-fluid rounded" />}
        </div>
        <div className="col-md-6">
        <h2>{product.title}</h2>
        <p className="lead">${product.price}</p>
        <p className="text-muted">{product.description}</p>
        <p className="text-info">Stock disponible: {product.stock}</p>
        {!addedToCart ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        ) : (
            <p className="text-success">¡Producto agregado al carrito!</p>
        )}
        </div>
    </div>
    </div>
);
}

ItemDetail.propTypes = {
product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    stock: PropTypes.number.isRequired,
}).isRequired,
};

export default ItemDetail;
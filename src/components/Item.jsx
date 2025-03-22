import PropTypes from "prop-types";

const Item = ({ product, addToCart }) => {
return (
    <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(3)}</p>
    <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
);
};

Item.propTypes = {
product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
}).isRequired,
addToCart: PropTypes.func.isRequired,
};

export default Item;

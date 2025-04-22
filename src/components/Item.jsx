import PropTypes from "prop-types";
import { useCart } from "../Context/useCart";
import ItemCount from './ItemCount';
import { useState } from 'react';

const Item = ({ product }) => {
  const [, setQuantityToAdd] = useState(0);
  const { addToCart } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);
    console.log(`Se intentarán agregar ${quantity} unidades de ${product.title} al carrito.`);
    // Llama a la función addToCart del contexto con el producto y la cantidad
    addToCart({ ...product, quantity: quantity });
  };

  return (
    <div className="card h-70">
      
      <img src={product.img} alt={product.title}  className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover'}}/>
      <div className="card-body">
      <h3 className="card-title">{product.title}</h3>
      <p className="card-text">${product.price.toFixed(3)}</p>
      {product.stock > 0 ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <p  className="card-footer bg-white border-top-0">Sin Stock</p>
      )}
    </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
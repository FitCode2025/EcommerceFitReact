import PropTypes from 'prop-types';
import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
const [count, setCount] = useState(initial);

const increment = () => {
    if (count < stock) {
    setCount(count + 1);
    }
};

const decrement = () => {
    if (count > 1) {
    setCount(count - 1);
    }
};

const handleAddToCart = () => {
    if (onAdd && count <= stock && count >= 1) {
    onAdd(count);
    } else if (count > stock) {
    alert(`No hay suficiente stock. Stock disponible: ${stock}`);
    } else if (count < 1) {
    alert('La cantidad mínima es 1.');
    }
};

return (
    <div className="d-flex align-items-center justify-content-between">
    <div  className="btn-group" role="group" aria-label="Cantidad">
        <button  className="btn btn-outline-secondary btn-sm" onClick={decrement} disabled={count <= 1}>
        -
        </button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-outline-secondary btn-sm" onClick={increment} disabled={count >= stock}>
        +
        </button>
    </div>
    <button className="btn btn-primary btn-sm" onClick={handleAddToCart} disabled={stock === 0}>
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
    </button>
    </div>
);
};

ItemCount.propTypes = {
stock: PropTypes.number.isRequired,
initial: PropTypes.number,
onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
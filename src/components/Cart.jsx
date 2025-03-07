import PropTypes from 'prop-types';

const Cart = ({ cart, removeFromCart }) => {
    // Calcular el total de la compra
    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <div className="cart">
            <h2>🛒 Tu Carrito</h2>
            
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <button onClick={() => removeFromCart(index)}>🗑️</button>
                        </div>
                    ))}
                    
                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            )}
        </div>
    );
}

    Cart.propTypes = {
        cart: PropTypes.array.isRequired,
        removeFromCart: PropTypes.func.isRequired
};

export default Cart;
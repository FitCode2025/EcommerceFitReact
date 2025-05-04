import  useCart  from "../Context/useCart";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Importa clearCart
  const navigate = useNavigate();

  // Calcular el total de la compra
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSeguirComprando = () => {
    navigate('/'); // Redirige a la página principal (catálogo)
  };

  return (
    <div className="cart">
      <h2>🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ${total}</h3>
          </div>

          <div className="cart-actions">
            <button onClick={handleSeguirComprando}>Seguir Comprando</button>
            <button onClick={clearCart}>Vaciar Carrito</button> {/* Agrega el botón Vaciar Carrito */}
            <Link to="/checkout">Terminar Compra</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
import { useCart } from "../Context/useCart"; // Asegúrate de la ruta correcta

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Obtiene cart y removeFromCart del contexto

  // Calcular el total de la compra
const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2); // Asegúrate de multiplicar por la cantidad

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
            <button onClick={() => removeFromCart(item.id)}>🗑️</button>{" "}
              {/* Usa el ID para remover */}
            </div>
        ))}

        <div className="cart-total">
            <h3>Total: ${total}</h3>
        </div>
        </>
    )}
    </div>
);
};

export default Cart;

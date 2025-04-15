import { useCart } from '../Context/useCart';
import { Link } from 'react-router-dom';

const Checkout = () => {
const { cart, total } = useCart();

if (cart.length === 0) {
    return (
    <div className="container mt-5">
        <h2>Checkout</h2>
        <p className="alert alert-info">Tu carrito está vacío. <Link to="/cart">Ir al carrito</Link>.</p>
    </div>
    );
}

const handlePlaceOrder = () => {
    // Aquí iría la lógica para procesar el pedido:
    // - Enviar los datos del carrito y la información del usuario al servidor.
    // - Realizar el pago.
    // - Limpiar el carrito después de un pedido exitoso.
    alert('¡Pedido realizado con éxito! (Funcionalidad de procesamiento no implementada)');
    // Puedes redirigir al usuario a una página de confirmación aquí.
};

return (
    <div className="container mt-5">
    <h2>Checkout</h2>
    <p className="lead">Resumen de tu pedido:</p>
    <ul className="list-group mb-3">
        {cart.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
            <h6 className="my-0">{item.title}</h6>
            <small className="text-muted">Cantidad: {item.quantity}</small>
            </div>
            <span className="text-muted">${(item.price * item.quantity).toFixed(2)}</span>
        </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>${total.toFixed(2)}</strong>
        </li>
    </ul>

    <h4>Información de Envío</h4>
    <form className="mb-3">
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre Completo</label>
        <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input type="email" className="form-control" id="email" placeholder="tu@email.com" required />
        </div>
        <div className="mb-3">
        <label htmlFor="address" className="form-label">Dirección</label>
        <input type="text" className="form-control" id="address" placeholder="Calle y número" required />
        </div>
        {/* Agrega más campos para la información de envío y pago */}
        <button type="button" className="btn btn-primary" onClick={handlePlaceOrder}>Realizar Pedido</button>
    </form>
    </div>
);
};

export default Checkout;
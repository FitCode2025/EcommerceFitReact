import { Link } from 'react-router-dom';
import { useCart } from '../Context/useCart';
import CartWidget from './CartWidget'; // Asegúrate de la ruta correcta

const NavBar = () => {
  useCart(); // Obtiene la cantidad total de items del carrito

return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
        <Link className="navbar-brand" to="/">
        💪 SuplementsCodeFit
        </Link>

        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/proteinas">Proteínas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/Pre-entrenos">Pre-entrenos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/Vitaminas">Vitaminas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/Creatinas">Creatinas</Link>
            </li>
        </ul>

        <div className="d-flex align-items-center">
            <CartWidget /> {/* Aquí se utiliza el CartWidget, que a su vez usa cartCount */}
            <Link to="/checkout" className="btn btn-success ms-2">
            Checkout
            </Link>
        </div>
        </div>
    </div>
    </nav>
);
};

export default NavBar;
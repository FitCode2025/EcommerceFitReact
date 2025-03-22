import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const NavBar = ({ cartCount }) => {
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
            <Link to="/cart" className="btn btn-outline-light position-relative">
            🛒 Carrito
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
            </span>
            </Link>
        </div>
        </div>
    </div>
    </nav>
);
};

NavBar.propTypes = {
cartCount: PropTypes.number.isRequired
};

export default NavBar;
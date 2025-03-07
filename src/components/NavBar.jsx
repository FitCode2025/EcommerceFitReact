import PropTypes from 'prop-types';

const NavBar = ({ cartCount }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    💪 SuplementsCodeFit
                </a>
                
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
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Proteínas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pre-entrenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vitaminas</a>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-light position-relative">
                            🛒 Carrito
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                            </span>
                        </button>
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
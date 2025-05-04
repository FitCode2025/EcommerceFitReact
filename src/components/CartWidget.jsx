import  useCart  from '../Context/useCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const { cartCount } = useCart();

return (
    <Link to="/cart" className="nav-link">
        🛒 
    {cartCount > 0 && (
    <span className="badge bg-danger rounded-pill">{cartCount}</span>
    )}
    </Link>
);
};

export default CartWidget;
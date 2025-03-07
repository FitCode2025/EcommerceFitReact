import PropTypes from 'prop-types';
import Item from './Items';
import products from '../data/products';

const ItemListContainer = ({ addToCart }) => {
return (
    <div className="product-list">
    {products.map((product) => (
        <Item 
        key={product.id} 
        product={product} 
        addToCart={addToCart} 
        />
    ))}
    </div>
);
};

ItemListContainer.propTypes = {
addToCart: PropTypes.func.isRequired
};

export default ItemListContainer;
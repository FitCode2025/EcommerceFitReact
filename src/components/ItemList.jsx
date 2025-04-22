import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ products }) => {
return (
    <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {products.map(product => (
        <Item
        key={product.id} className="col"
        product={product}
        />
    ))}
    </div>
);
};

ItemList.propTypes = {
products: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    }).isRequired
).isRequired,
};

export default ItemList;
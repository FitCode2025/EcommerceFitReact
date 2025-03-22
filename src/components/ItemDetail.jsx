import PropTypes from 'prop-types';

function ItemDetail({ product }) {
if (!product) {
    return <p>No se ha seleccionado ningún producto.</p>;
}
return (
    <div>
    <h3>{product.name}</h3>
    <p>ID: {product.id}</p>
    <p>Precio: ${product.price}</p>
    <p>{product.description}</p>

    </div>
);
}

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string
    })
};

export default ItemDetail;
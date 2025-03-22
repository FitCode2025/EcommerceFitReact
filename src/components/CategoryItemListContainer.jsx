import { useParams } from 'react-router-dom';
import Item from './Item'; // Importa el componente Item
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CategoryItemListContainer = ({ addToCart }) => { 
const { categoryId } = useParams();
const [products, setProducts] = useState();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);
    
    const getProductsByCategory = (category) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const allProducts = [
                    { id: 1, title: 'Proteina', category: 'Proteinas', price: 49.00, image: '/public/images/proteina1.jpg' },
                    { id: 2, title: 'Creatina', category: 'Creatinas', price: 30.00, image: '/public/images/creatina.jpg' },
                    { id: 3, title: 'Pre-entreno', category: 'Pre-Entrenos', price: 40.00, image: '/public/images/pre entreno 2.jpg' },
                    { id: 4, title: 'Vitamina', category: 'Vitaminas', price: 20.00, image: '/public/images/vitamina.jpg' },
                ];

                const filteredProducts = allProducts.filter(product => 
                    product.category.toLowerCase() === category.toLowerCase()
                );

                if (filteredProducts.length > 0) {
                    resolve(filteredProducts);
                } else {
                    reject("No se encontraron productos para esta categoría.");
                }
            }, 1500);
        });
    };

    getProductsByCategory(categoryId)
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
}, [categoryId]);

if (loading) {
    return <div>Cargando productos...</div>;
}

if (error) {
    return <div>Error al cargar los productos: {error}</div>;
}

return (
    <div>
    <h2>Productos de la categoría: {categoryId}</h2>
      <div className="product-list"> {/* Puedes agregar un contenedor para los productos */}
        {products.length > 0 ? (
        products.map(product => (
            <Item key={product.id} product={product} addToCart={addToCart} /> // Renderiza el componente Item para cada producto
        ))
        ) : (
        <p>No hay productos en esta categoría.</p>
        )}
    </div>
    </div>
);
};

CategoryItemListContainer.propTypes = {
    addToCart: PropTypes.func
};

export default CategoryItemListContainer;
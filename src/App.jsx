import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryItemListContainer from './components/CategoryItemListContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  
  return (
    <div className="App">
      <NavBar cartCount={cart.length} />
      <Routes>
      <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/products" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<CategoryItemListContainer addToCart={addToCart} />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      </div>
)
}

export default App;
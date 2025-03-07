import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
// En App.jsx
<Cart 
    cart={cart} 
    removeFromCart={removeFromCart} 
/>

  return (
    <div className="App">
      <NavBar cartCount={cart.length} />
      <ItemListContainer addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
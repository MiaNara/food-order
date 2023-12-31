import './App.css';
import DishesList from './components/Dish/DishList/DishesList';
import DISHES from './DishData';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <DishesList items={DISHES} />
        </Layout>
      </CartProvider>


    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DishesList from './components/Dish/DishesList';
import DISHES from './DishData';
import Layout from './components/Layout/Layout';
import { CartProvider } from './context/CartContext';
import CartModal from './components/Modal/CartModal';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CartProvider>
        <Layout>
          <DishesList items={DISHES} />
        </Layout>
      </CartProvider>


    </div>
  );
}

export default App;

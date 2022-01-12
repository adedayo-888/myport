import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import ProductList from './components/ProductList/ProductList';
function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <ProductList />
    </div>
  );
}
export default App;

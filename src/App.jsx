import './App.css';

// import { useContext } from 'react';
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import ProductList from './components/ProductList/ProductList';
// // import Toggle from './components/Toggle/Toggle';
// import { ThemeContext } from './context';

const App = () => {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>
      <Hero />
      <About />
      <ProductList />
    </div>
  );
};

export default App;

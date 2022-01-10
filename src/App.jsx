import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <div className='sections'>
        <Intro />
        <Portfolio />

        <Contact />
      </div>
    </div>
  );
}

export default App;

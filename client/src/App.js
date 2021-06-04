import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Products/>
      <Footer/>
    </Router>
  );
}

export default App;

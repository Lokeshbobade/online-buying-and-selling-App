import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import MenCloths from './components/Mens';
import WomenCloths from './components/Womens';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Signup from './components/Signup';
import MensProductDetail from './components/MenProductDetails'
import WomensProductDetail from './components/WomensProductDetails'
function App() {
  return (
    <>
    
      <Header/>
      <Switch>       
        <Route exact path="/home" component={Home} />
        <Route exact path="/mens" component={MenCloths} />
        <Route exact path="/womens" component={WomenCloths} />
        <Route exact path="/mens-product/:id" component={MensProductDetail} />
        <Route exact path="/womens-product/:id" component={WomensProductDetail} />      
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path = '/login' component={Login}/>
        <Route exact path = '/signup' component={Signup}/>
      </Switch>
      <Footer/>
    
    </>
  );
}

export default App;










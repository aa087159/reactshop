import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopProvider } from './Context'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Detail from './components/Detail'
import EmbroideryList from './components/Embroidery'
import Cloth from './components/Cloth'
import Knitting from './components/Knitting'
import Wooden from './components/Wooden'
import Animals from './components/Animals'
import About from './components/About'
import Cart from './components/Cart'
import Default from './components/Default'

function App() {
  return (
    <ShopProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Detail" component={Detail} />
          <Route path="/EmbroideryList" component={EmbroideryList} />
          <Route path="/Cloth" component={Cloth} />
          <Route path="/Knitting" component={Knitting} />
          <Route path="/Wooden" component={Wooden} />
          <Route path="/Animals" component={Animals} />
          <Route path="/About" component={About} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Router>
    </ShopProvider>
  );
}

export default App;

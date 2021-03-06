import './App.css';
import  {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


import ListProducts from './components/data-actions/ListProducts';
import CreateProduct from './components/data-actions/CreateProduct';
import UpdateProduct from './components/data-actions/UpdateProduct';
import DeleteProduct from './components/data-actions/DeleteProduct';
import ViewProduct from './components/data-actions/ViewProduct';
import { Home } from './components/nav-comps/Home';
import { Navbar } from './components/nav-comps/Navbar';
import { Admilogin } from './components/nav-comps/AdmiLogin';
import { Contact } from './components/nav-comps/Contact';
import Displayproducts from './components/pages-comps/Displayproducts';
import React from 'react';
import { AboutUs } from './components/nav-comps/AboutUs';



function App() {



  return (
    <div className="main-root">
          <Router> 
              <Switch>
                    <Route path="/"  exact component={Home} />
                    <Route path="/products" component={ListProducts} />
                    <Route path="/add-product"  component={CreateProduct} />
                    <Route path="/update-product/:id" component={UpdateProduct} />
                    <Route path="/delete-product/:id"  component={DeleteProduct} />
                    <Route path="/view-product/:id"  component={ViewProduct} />
                    <Route path="/home"  component={Home} />
                    <Route path="/nav"  component={Navbar} />
                    <Route path="/admi-login"  component={Admilogin} />
                    <Route path="/contact" component = {Contact}/>
                    <Route path="/products-list" component = {Displayproducts}/>
                    <Route path="/aboutus" component = {AboutUs}/>
              </Switch>
          </Router>
    </div>
  );
}

export default App;

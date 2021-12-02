
import './App.css';
import Navbar from './components/Navbar';
import "boxicons";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ItemList from './components/ItemList';
import Producto1 from './Productos/Botines 11/producto1';
import Producto2 from './Productos/Botines 11/producto2';
import Producto3 from './Productos/Botines 11/producto3';
import Producto4 from './Productos/Botines 11/producto4';
import Producto5 from './Productos/Botines 11/producto5';
import Producto6 from './Productos/Botines 11/producto6';
import ProductoF1 from "./Productos/Botines Futsal/producto1";
import ProductoF2 from "./Productos/Botines Futsal/producto2";
import ProductoF3 from "./Productos/Botines Futsal/producto3";
import ProductoF4 from "./Productos/Botines Futsal/producto4";
import ProductoF5 from "./Productos/Botines Futsal/producto5";
import ProductoF6 from "./Productos/Botines Futsal/producto6";
import ItemListFutsal from './components/ItemListFutsal';


function App({NavbarVisible}) {


  return (
    <div className="App">
      <Router>

      

      <Switch>
        <Route exact path="/">
        <Navbar />
        <ItemList/>
        </Route>

        <Route exact path="/1">
         <Producto1 />
        </Route>

        <Route exact path="/2">
         <Producto2 />
        </Route>

        <Route exact path="/3">
         <Producto3 />
        </Route>

        
        <Route exact path="/4">
         <Producto4 />
        </Route>
        
        <Route exact path="/5">
         <Producto4 />
        </Route>
        
        <Route exact path="/6">
         <Producto6 />
        </Route>
        

        <Route exact path="/futsal">
        
         <ItemListFutsal />
        </Route>

        <Route exact path="/futsal/1">
         <ProductoF1 />
        </Route>

        <Route exact path="/futsal/2">
         <ProductoF2 />
        </Route>

        <Route exact path="/futsal/3">
         <ProductoF3 />
        </Route>

        <Route exact path="/futsal/4">
         <ProductoF4 />
        </Route>

        <Route exact path="/futsal/5">
         <ProductoF5 />
        </Route>

        <Route exact path="/futsal/6">
         <ProductoF6 />
        </Route>
       


      </Switch>
      </Router>
    </div>
  );
}

export default App;

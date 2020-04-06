import React, {Component} from 'react';
import './App.css';
import db from './db';
import Banner from './components/Banner';
import Product from './components/Product';
import Cart from './components/Cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...db, 
      lineItems: [], 
      cartOpen: false
    }
  }

  toggleCart = () => {
    const cartNewState = !this.state.cartOpen;
    this.setState({
      cartOpen: cartNewState
    })
  }

  addToCart = (product) => {
    this.setState({
      lineItems: [...this.state.lineItems, product]
    })
  }


  render() {
    return (
      <div className="App">
        <span onClick={this.toggleCart}>Cart (0)</span>
        {this.state.cartOpen &&
          <Cart/>
        }
        
        <Banner banner={db.banner} />
        {db.products.map((product, index) => <Product product={product} addToCart={this.addToCart} />)}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import db from './db';
import Banner from './components/Banner';
import Product from './components/Product';
import Cart from './components/Cart';
import Form from './components/Form';


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

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
  }


  render() {
    
    return (
      <div className="App">
        <span onClick={this.toggleCart}>Cart (0)</span>
        {this.state.cartOpen &&
          <Cart lineItems={this.state.lineItems} />
        }
        
        <Banner banner={db.banner} />
        <Form/>
        <div className="productList">
          {db.products.map((product, index) => <Product product={product} addToCart={this.addToCart} key={`product-${index}`} />)}
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions";
import Product from "./Product";
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }
       
    }
  

    
    render() {
        
       let item = this.props.cart.map(item => 
          item= 
          <div > 
              {item.name}
          {/* <img src={item.image_url} alt="img url"></img> */}
           </div>
            );
        return (
            <div> 
              Shopping Cart:
              <div>{item} </div>
            </div>

        )
    }

}
function mapStateToProps(state) {
    return {
        cart: state.cart,

    };
}



export default connect(mapStateToProps)(ShoppingCart);

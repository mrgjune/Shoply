import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions";
import Product from "./Product";
class ShoppingCart extends Component {


    render() {
        console.log(this.props.price)
        let item = this.props.cart.map(item => {
            return ( <div>
                {item.name}
                {item.price}
                <img style={{ width: 80 }} src={item.image_url} alt="img url"></img>
            </div> 
            )
        })

        return (
            <div>
                Shopping Cart:
              <div>{item}<div>
                  </div> price: {this.props.price}</div>
            </div>

        )
    }

}
function mapStateToProps(state) {
    return {
        cart: state.cart,
        price:state.price

    };
}



export default connect(mapStateToProps)(ShoppingCart);

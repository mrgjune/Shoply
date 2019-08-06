import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions";
import Product from "./Product";
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(product) { this.props.addItem(product)}
    removeItem(product) { this.props.removeItem(product); }

    render() {
        const invObject = this.props.inventory.products
        const keys = (Object.keys(invObject))
        const inventory = keys.map(key => {
            let product= invObject[key]

            return (
                <Product
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                    key={key}
                    id={key}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image_url={product.image_url}
                     />
            );
        });

        return (
            <div>
                <ul>{inventory}
                </ul>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.cart)
    return {
        inventory: state.inventory,
        cart: state.cart,
        count : state.count,

    };
}

const mapDispatchToProps = {
    addItem: (product) => ({
        type: "ADD_ITEM", payload:product}),
    removeItem: (product) => ({
    type: "REMOVE_ITEM", payload:product})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

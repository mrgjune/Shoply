import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }
    add() {
        let product = {
                    id:this.props.id,
                    name:this.props.name,
                    price:this.props.price,
                    description:this.props.description,
                    image_url:this.props.image_url,
        }
        
        this.props.addItem(product)
    }
    remove() {
        console.log(this.props.id)
        this.props.removeItem(this.props.id)
    }
    

    render() {
        return (
            <div>
                <li>{this.props.name}
                <button onClick={this.add}>Add to cart</button>
                <button onClick={this.remove}>Remove from cart </button></li>
            </div>
        )
    }
}
export default Product;
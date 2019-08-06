import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  render() {
    return (
      <div>
        <ShoppingList/>
        <ShoppingCart/>
      </div>
    );
  }
}

export default App;

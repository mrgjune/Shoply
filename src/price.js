

function addPrice() {
   console.log(this.props.getState());
}



function mapStateToProps(state) {
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
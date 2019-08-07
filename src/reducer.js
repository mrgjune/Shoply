
import data from "./data.json";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import {addPrice} from "./price";
const INITIAL_STATE = {
    inventory: data,
    cart: [],
    count: 0,
    price:0
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case ADD_ITEM:
            return { ...state,cart: [...state.cart, action.payload ] };

        case REMOVE_ITEM:
           let cartCopy = [...state.cart]
           for (let i = 0; i < state.cart.length; i++) {
               let item = state.cart[i];
                if (item.id === action.payload) {
                   cartCopy.splice(i,1)
                   break;
                }
           }
        return { ...state, cart: cartCopy };
        default:
            return state
    }
}



export default reducer;
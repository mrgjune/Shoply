
import data from "./data.json";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

const INITIAL_STATE = {
    inventory: data,
    cart: [],
    count: 0,
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case ADD_ITEM:
            return { ...state, count: state.count + 1, cart: [...state.cart, action.payload ] };

        case REMOVE_ITEM:
            let idx = 0;
           for (let i = 0; i < state.cart.length; i++) {
               let item = state.cart[i];
                if (item.id === action.payload) {
                   state.cart.splice(i,1)
                   break;
                }
           }
        return { ...state, cart: state.cart };
        default:
            return state
    }
}



export default reducer;
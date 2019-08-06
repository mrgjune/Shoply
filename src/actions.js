import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function removeItem() {
  return {
    type: REMOVE_ITEM
  };
}

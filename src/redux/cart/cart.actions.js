import { CartHiddenType } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartHiddenType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartHiddenType.ADD_ITEM,
    payload: item
})
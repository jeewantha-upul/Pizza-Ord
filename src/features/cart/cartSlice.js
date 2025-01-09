import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:[{
    pizzaId:2343,
    name:'name of the pizza',
    quantity:2,
    unitPrize:30,
    totalPrice:230
  }]
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addItem(state , action){
      // payload - pizza object
     state.cart.push(action.payload)
    },
    deleteItem(state , action){
        // payload - pizza object
        state.cart = state.cart.filter( item=>item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state , action){
      // payload - pizzaId
      let item = state.cart.find( item => item.pizzaId === action.payload);
      item.quantity++;

      item.totalPrice = item.quantity * item.unitPrize;
    },
    decreaseItemQuantity(state , action){
      // payload - pizzaId
      let item = state.cart.find( item => item.pizzaId === action.payload);
      item.quantity--;

      item.totalPrice = item.quantity * item.unitPrize;
    },
    clearCart(state ){
      state.cart = [];
    }
  }
})

export const {addItem , deleteItem , increaseItemQuantity , decreaseItemQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;
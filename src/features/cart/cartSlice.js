import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:[{
    pizzaId:2343,
    name:'name of the pizza',
    quantity:2,
    unitPrice:30,
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

      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state , action){
      // payload - pizzaId
      let item = state.cart.find( item => item.pizzaId === action.payload);
      item.quantity--;

      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state ){
      state.cart = [];
    }
  }
})

export const getTotalCartQuantity = (state)=>
  state.cart.cart.reduce((sum,item)=> sum + item.quantity , 0)


export const getTotalCartPrice = (state)=>
  state.cart.cart.reduce((sum,item)=> sum + item.unitPrice , 0)


export const {addItem , deleteItem , increaseItemQuantity , decreaseItemQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;
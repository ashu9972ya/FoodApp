import * as React from 'react';
import ContextCart from './ContextCart';
import { createContext, useReducer } from 'react';
import Feeds from "./data/Feeds.json";
import reducer from "./reducer";


const initialState={
  data:Feeds,
  totalAmount:0,
  totalItem:0,
};
export const CartContext= createContext()
export default function Menu() {
   const [state, dispatch]= useReducer(reducer, initialState)
  return (
  
    <>
    <CartContext.Provider value={Feeds}>
    <ContextCart/>
    </CartContext.Provider>
    </>
  )   
}

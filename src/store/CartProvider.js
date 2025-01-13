import React, { useState } from 'react'
import CartContext from "./cart-context"




const CartProvider = (props) => {
    
    const [cartItems,setCartItems]=useState([])

    const addItem=(item)=>{
        setCartItems((ps)=>{
            let existItemIndex=ps.findIndex((CI)=>CI.title===item.title)
            let update;
            
                   if(existItemIndex>-1){
                    const obj=ps[existItemIndex];
                    obj.quantity++;
                     update=[...ps];
                     update[existItemIndex]=obj
            
                   }
                   else{
                    update=[...ps,{...item,quantity:1}]
                   }
             return update;
        })    
    }


    
    const cartContext={
        items:cartItems,
        addToCart:addItem,
        removeItem:()=>{},
    }
    
  return (
   <CartContext.Provider value={cartContext}>
{props.children}
   </CartContext.Provider>
  )
}

export default CartProvider

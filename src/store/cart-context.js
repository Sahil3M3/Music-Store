import React from 'react'


let CartContext =React.createContext({
items:[],
addToCart:()=>{},
removeItem:()=>{}
})



export default CartContext;
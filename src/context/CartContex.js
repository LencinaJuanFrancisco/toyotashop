import React, {createContext } from "react";
import { useState } from "react";

export const CartConext = createContext();



function CartContextProvider({children}) {
    const [cartList,setCartList]= useState([])

    const isInCart=(id)=>{
        console.log('id',id);
        console.log(cartList);
      return  cartList.item.includes(id)
    }

    const addItem =(item,count)=>{  
       
        console.log('esta en la lista',isInCart(item.id));

        setCartList([...cartList,{item,count}])
        
    }

    const removeItem=(itemId)=>{
       const newList =  cartList.filter(i => i.item.id !== itemId)
       setCartList(newList)
    }
    const clear=()=>{
        setCartList([])    
    }
  return (
    <CartConext.Provider value={{cartList,addItem,removeItem,clear}}>
        {children}
    </CartConext.Provider>
  )
}

export default CartContextProvider





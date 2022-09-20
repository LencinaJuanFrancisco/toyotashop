import React, { createContext } from "react";
import { useEffect } from "react";

import { useState } from "react";

export const CartConext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const totalItem= ()=>{
    let count=0
      if(cartList.length > 0){
        cartList.forEach(item => {
         count+= item.count
        });
        return count
      }
  }
  const totalTiket =()=>{
    let total=0
    if(cartList.length > 0){
      cartList.forEach(item => {
       total+= (item.count * item.item.price)
      });
      return total
    }
  }

useEffect(()=>{
  totalItem()
  totalTiket()
},[cartList])

  const isInCart = (item) => {
    //la primera vez cuando el array esta vacio debo devolver False xq si no da error, xq no puede leer item al estar vacio
    if (cartList.length === 0) return false;
    //la segunda vez que ingresa ya tiene con que comparar por lo tanto si es distinto de cero y el item.id es igual devuelve TRUE
    if (cartList[0].item.id === item.id) return true;
    //y por cualquier otra opcion devuel false
    return false;
  };

  const addItem = (item, count) => {
    if (isInCart(item)) {
      //al ser verdadero sumo la canrtidad que tiene  mas lo que viene
      count += cartList[0].count;
      //luego filtro para eliminar el item que esta y guardo el nuevo item con el count actualizado
      const newList = cartList.filter((i) => i.item.id !== item.id);
      newList.push({ item, count });
      setCartList(newList);
    } else {
      // por cualquier opcion de false almacena el item , ya que no existe en el estado
      setCartList([...cartList, { item, count }]);
    }
  };

  const removeItem = (itemId) => {
    const newList = cartList.filter((i) => i.item.id !== itemId);
    setCartList(newList);
  };
  const clear = () => {
    setCartList([]);
  };
  return (
    <CartConext.Provider value={{ cartList, addItem, removeItem, clear, totalItem ,totalTiket}}>
      {children}
    </CartConext.Provider>
  );
}

export default CartContextProvider;

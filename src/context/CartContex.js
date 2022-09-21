import React, { createContext } from "react";

import { useState } from "react";

export const CartConext = createContext();

function CartContextProvider({ children }) {

  const [cartList, setCartList] = useState([]);

  const saveItemInCart = (item, count) => {
   
    if (isInCart(item)) {
      if (item.count < count) {
        count += cartList[0].count;
        const newList = cartList.filter((i) => i.item.id !== item.id);
        newList.push({ item, count });
        setCartList(newList);
      }
      else  {
        count -= cartList[0].count;
        const newList = cartList.filter((i) => i.item.id !== item.id);
        newList.push({ item, count });
        setCartList([...cartList, { item, count }]);
      }
    }else{

      setCartList([...cartList, { item, count }]);
    }
  }

    const totalItem = () => {
      let count = 0;
      if (cartList.length > 0) {
        cartList.forEach((item) => {
          count += item.count;
        });
        return count;
      }
    };
    const totalTiket = () => {
      let total = 0;
      if (cartList.length > 0) {
        cartList.forEach((item) => {
          total += item.count * item.item.price;
        });
        return total;
      }
    };

    const isInCart = (item) => {
      //la primera vez cuando el array esta vacio debo devolver False xq si no da error, xq no puede leer item al estar vacio
      if (cartList.length === 0) return false;
      //la segunda vez que ingresa ya tiene con que comparar por lo tanto si es distinto de cero y el item.id es igual devuelve TRUE
      if (cartList[0].item.id === item.id) return true;
      //y por cualquier otra opcion devuel false
      return false;
    };

    const addItemFromCart = (item, count) => {
      console.log('addItemFromCart ---->item',item);
      console.log('addItemFromCart ---->count',count);
      saveItemInCart(item, count);
    };

    const addItem = (item, count) => {
      saveItemInCart(item, count);
    };

    const removeItem = (itemId) => {
      const newList = cartList.filter((i) => i.item.id !== itemId);
      setCartList(newList);
    };

    const clear = () => {
      setCartList([]);
    };

    return (
      <CartConext.Provider
        value={{
          cartList,
          addItem,
          removeItem,
          clear,
          totalItem,
          totalTiket,
          addItemFromCart,
        }}
      >
        {children}
      </CartConext.Provider>
    );
  };

export default CartContextProvider;

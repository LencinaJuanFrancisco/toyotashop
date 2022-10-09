import React, { createContext } from "react";
import { useEffect } from "react";
import OnAddOk from "../utils/alertes/OnAddOk";
import { useState } from "react";

export const CartConext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const [errorStock, setErrorStock] = useState({
    error: false,
    message: `Bienvenido !!! `,
    dis: 0,
  });

  useEffect(() => {
    console.log("useEffect errorStock", errorStock);

    OnAddOk(errorStock);
  }, [errorStock]);

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

  const addItem = (item, count) => {
    // let dis = 0;
    // setErrorStock({ error: false, message: ` `, dis: 0 });

    if (isInCart(item)) {
      //al ser verdadero sumo la canrtidad que tiene  mas lo que viene
      count += cartList[0].count;

      let dis = item.stock - count;
      //luego filtro para eliminar el item que esta y guardo el nuevo item con el count actualizado
      if (dis < 0) {
        console.log("dis entre al erroro", dis);
        let quantityAvailable = item.stock - cartList[0].count;
        setErrorStock({
          error: true,
          message: `la cantidad solicitada excede el el stock permitido, puede agregar al carrito ${quantityAvailable} unidades mas`,
          dis: quantityAvailable,
        });
        console.log('seterrorstock en dis < 0 ',errorStock);
        // OnAddOk(errorStock);
      } else if(dis === 0){
        let quantityAvailable = item.stock - cartList[0].count;
        setErrorStock({
          error: true,
          message: `la cantidad solicitada excede el el stock permitido, no puede agragar mas cantidad al carrito`,
          dis: quantityAvailable,
        });
      //   OnAddOk(errorStock);
      }else{
       setErrorStock({ error: false, message: `Producto Agregado `, dis: 0 });
        const newList = cartList.filter((i) => i.item.id !== item.id);
        newList.push({ item, count });
        setCartList(newList);
        // OnAddOk(errorStock);
      }
        
      
    } else {
      // dis = item.stock - count;
       setErrorStock({error:false,message:'Producto Agregado'})
      // por cualquier opcion de false almacena el item , ya que no existe en el estado
      setCartList([...cartList, { item, count }]);
      // OnAddOk(errorStock);
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
    <CartConext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        totalItem,
        totalTiket,
        errorStock,
        setErrorStock,
      }}
    >
      {children}
    </CartConext.Provider>
  );
}

export default CartContextProvider;

import React from 'react';
import { useState } from "react";
// import OnAddOk from '../utils/alertes/OnAddOk';
// import { CartConext } from "../context/CartContex";

const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);
  const [instock, setStock] = useState(stock);

  // const {errorStock} = useContext(CartConext)

  const addProduct = () => {
    if (count < instock) setCount(count + 1);
  };
  const subProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handelClic=()=>{
    onAdd(count)
    // OnAddOk(errorStock)
   
  }


  return (
    <>
      <div className="mt-5">
        <p>en stock: {instock}</p>
        
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger " onClick={addProduct}>
            +
          </button>
          <h2 className="px-3  "> {count}</h2>
          <button type="button" className="btn btn-danger" onClick={subProduct}>
            -
          </button>
        </div>
      </div>
        <button type="button" className="btn btn-danger mt-3 w-3" onClick={()=>handelClic()} >Agregar al carrito </button>
    </>
  );
};
export default ItemCount;
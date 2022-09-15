import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [instock, setStock] = useState(stock);

  const addProduct = () => {
    if (count < instock) setCount(count + 1);
  };
  const subProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };



  return (
    <>
      <div className="mt-5">
        <p>en stock:{instock}</p>
        
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger " onClick={addProduct}>
            +
          </button>
          <h2 className="px-3  "> {count}</h2>
          <button type="button" class="btn btn-danger" onClick={subProduct}>
            -
          </button>
        </div>
      </div>
        <button type="button" class="btn btn-danger mt-3 w-3" onClick={()=>onAdd(count)} >Agregar al carrito </button>
    </>
  );
};
export default ItemCount;
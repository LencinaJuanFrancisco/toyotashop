import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {
  const [count, setCount] = useState(initial);
  const [instock, setStock] = useState(stock);

  const addProduct = () => {
    if (count < instock)  setCount(count + 1);
    
  };
  const subProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>
        <h3>logo toyota</h3>
        <h2>en stock:{instock}</h2>
        <h2>Cantidad {count}</h2>
        <button onClick={addProduct}>+</button>
        <button onClick={subProduct}>-</button>
      </div>
    </>
  );
};
export default ItemCount;

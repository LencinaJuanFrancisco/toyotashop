import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "../containers/ItemList";
import promesa from "../utils/promesa";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    promesa()
      .then((rta) => setDatos(rta))
      .catch((err) => console.log(err));
  }, []);

  const onAdd = (product) => {
    alert(`ha seleccionado ${product} al carrito`);
  };
  return (
    <>
      {console.log(datos)}
      <ItemList product={datos} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};
export default ItemListContainer;

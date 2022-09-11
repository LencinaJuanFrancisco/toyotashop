import React, { useEffect, useState} from "react";

import ItemList from "../component/ItemList";
import promesa from "../utils/promesa";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    
    if (idCategory) {
      promesa()
        .then((rta) => {
          const filter = rta.filter((category) => category.type === idCategory);
          setDatos(filter);
        })
        .catch((err) => console.log(err));
    }else {
     
        promesa()
          .then((rta) => setDatos(rta))
          .catch((err) => console.log(err));
      };
  },[idCategory])

  // const onAdd = (product) => {
  //   alert(`ha seleccionado ${product} al carrito`);
  // };
  return (
    <>
      <div className="container" >
      <ItemList product={datos} />
      </div>
    </>
  );
};
export default ItemListContainer;

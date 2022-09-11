import React, { useEffect, useState} from "react";

import ItemList from "../component/ItemList";
import promesa from "../utils/promesa";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
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
      <h2 className="mt-3">Lista de Productos </h2>
      { idCategory ? <h3 className="text-capitalize">{idCategory}</h3>:<></>}
      {
        datos.length>0 ? <ItemList product={datos}/> : <Spinner></Spinner>
      }
      </div>
    </>
  );
};
export default ItemListContainer;

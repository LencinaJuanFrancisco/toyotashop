import React, { useEffect, useState } from "react";

import ItemList from "../component/ItemList";

import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";

import db from "../utils/firebaseConfig";
import { collection, query, where } from "firebase/firestore";
import getItems from "../utils/getItems";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      (async () => {
        const q = query(
          collection(db, "products"),
          where("type", "==", idCategory)
        );
        const rta = await getItems(q);
        setDatos(rta);
      })();
    } else {
      (async () => {
        const q = await query(collection(db, "products"));
        const rta = await getItems(q);
        setDatos(rta);
      })();
    }
  }, [idCategory]);

  // const onAdd = (product) => {
  //   alert(`ha seleccionado ${product} al carrito`);
  // };
  return (
    <>
      <div className="container">
        <h2 className="mt-3">Lista de Productos </h2>
        {idCategory ? <h3 className="text-capitalize">{idCategory}</h3> : <></>}
        {datos.length > 0 ? <ItemList product={datos} /> : <Spinner></Spinner>}
      </div>
    </>
  );
};
export default ItemListContainer;

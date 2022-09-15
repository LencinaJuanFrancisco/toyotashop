import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../component/ItemDetail";
import getItem from "../utils/getItem";
import Spinner from "../utils/Spinner";
const ItemDetailContainer = () => {
  const [item, setItem] = useState();

  const {idItem}= useParams()
    console.log(idItem);
    
   

  useEffect(() => {
    getItem(idItem)
      .then(rta => setItem(rta))
      .catch(err => console.log(err));
  }, [idItem]);

  return( <>{item ? <ItemDetail item={item}/> : <Spinner></Spinner>}</>);
};
export default ItemDetailContainer;

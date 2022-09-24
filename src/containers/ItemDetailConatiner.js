import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../component/ItemDetail";
import Spinner from "../utils/Spinner";

import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();

  const { idItem } = useParams();
  // console.log(idItem);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: idItem });
      } else {
        // doc.data() will be undefined in this case
        console.log("no se encontro el documento");
      }
    })();
  }, [idItem]);

  return <>{item ? <ItemDetail item={item} /> : <Spinner></Spinner>}</>;
};
export default ItemDetailContainer;

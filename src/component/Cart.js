import React, { useContext } from "react";
import { CartConext } from "../context/CartContex";
import { Link } from "react-router-dom";
import db from '../utils/firebaseConfig'
import { serverTimestamp,doc, setDoc, collection,updateDoc, increment  } from "firebase/firestore";
import InputBuyerOrder from "../utils/alertes/InputBuyerOrder";
import OrderOk from "../utils/alertes/OrderOk";

function Cart() {
  const { cartList, removeItem, clear, totalItem, totalTiket } = useContext(
    CartConext
  );

  const createOrder = async () => {
    const buyer = await InputBuyerOrder()
    console.log(buyer);
    
      const item = cartList.map((i) => ({
        id: i.item.id,
        title: i.item.bran,
        price: i.item.price,
        quantity: i.count,
      }));
  
      let newOrden = {
        id: 1,
        buyer: {
          name: buyer[0].name ,
          cel:  buyer[0].cel ,
          email: buyer[0].email,
        },
        items: item,
        date: serverTimestamp(),
        total: totalTiket(),
      };
      console.log('newOrder ---->', newOrden );
      const newOrderRef=doc(collection(db,'orders'))
      OrderOk(newOrderRef.id)
      await setDoc(newOrderRef,newOrden)
      clear()
  
      item.map(async(i)=>{
        const itemRef= doc(db,'products',i.id)
        const rta=  await updateDoc(itemRef, {
        stock: increment(-i.quantity)// firebase no te deja hacer una reste comun y agregarle a la variable
      })
      console.log(rta);
    })
    

  }

  return (
    <div className="container mt-5">
      <h1>CART </h1>
      <div>
        {cartList.length > 0 ? (
          <button className="btn btn-danger mx-2" onClick={() => clear()}>
            Eliminar todos
          </button>
        ) : (
          <></>
        )}
        <Link to="/" className="text-decoration-none mx-2">
          <button className="btn btn-outline-danger my-3">
            {cartList.length > 0 ? (
              <span>Seguir comprando</span>
            ) : (
              <span>Ir a comprar</span>
            )}
          </button>
        </Link>
      </div>
      {cartList.length > 0 ? (
        <div className="table-responsive mt-3">
          <table className="table table-light table-hover align-middle caption-top">
            <caption>Lista de productos</caption>
            <thead>
              <tr>
                <th scope="col">id Producto</th>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">TOTAL</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((i) => (
                <tr key={i.item.id}>
                  <th scope="row">{i.item.id}</th>
                  <td>
                    <img
                      src={i.item.imge}
                      className="rounded mx-auto d-block"
                      width={50}
                      alt="..."
                    ></img>
                  </td>
                  <td>{i.item.bran}</td>
                  <td>{i.item.price}</td>
                  <td>{i.count}</td>
                  <td>{i.item.price * i.count}</td>
                  <td>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => removeItem(i.item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{totalItem()}</td>
              <td>{totalTiket()}</td>
            </tfoot>
          </table>
        </div>
      ) : (
        <h2>Carrito Vacio</h2>
      )}
      {cartList.length > 0 ? (
        <div className="container mt-5">
          <button
            className="btn btn-outline-dark"
            onClick={() => createOrder()}
          >
            ORDEN CHECK NOW
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cart;

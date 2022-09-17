import React, { useContext } from "react";
import { CartConext } from "../context/CartContex";
import { Link } from "react-router-dom";
function Cart() {
  const { cartList, removeItem, clear } = useContext(CartConext);
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
          <button className="btn btn-outline-danger">
            {cartList.length > 0 ? (
              <span>Seguir comprando</span>
            ) : (
              <span>Ir a comprar</span>
            )}
          </button>
        </Link>
      </div>
      {cartList.length > 0 ? (
        <div className="table-responsive mt-5">
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
              <td>total Item</td>
              <td>$ total</td>
            </tfoot>
          </table>
        </div>
      ) : (
        <h2>Carrito Vacio</h2>
      )}
    </div>
  );
}

export default Cart;

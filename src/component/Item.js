import React from "react";
import {Link} from 'react-router-dom'
function Item({ product }) {
  return (
    <div className="col card-group">
      <div className="card position-relative border-0 ">
        <img src={product.imge} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.bran}</h5>
        <span className="badge rounded-pill bg-secondary ">{product.type}</span>
        {/* <span>$ {product.price}</span> */}
        </div>
        <div className='container justify-content-center'>
       <Link to={`/item/${product.id}` } className="justify-content-center"><button className="btn btn-danger btn-sm mb-1 ">detail</button>  </Link> 

        </div>
        {/* <div className="card-footer">
        <small className="text-muted">stock {product.stock} unidades</small>
      </div> */}
      </div>
    </div>
  );
}

export default Item;
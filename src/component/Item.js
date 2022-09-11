import React from "react";
import {Link} from 'react-router-dom'
function Item({ product }) {
  return (
    <div class="col">
      <div class="card">
        <img src={product.imge} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.bran}</h5>
        
        </div>
        <div class='container justify-content-center'>
       <Link to={`/item/${product.id}` } className="justify-content-center"><button class="btn btn-danger btn-sm mb-1 ">detail</button>  </Link> 

        </div>
        <div class="card-footer">
        <small class="text-muted">stock {product.stock} unidades</small>
      </div>
      </div>
    </div>
  );
}

export default Item;
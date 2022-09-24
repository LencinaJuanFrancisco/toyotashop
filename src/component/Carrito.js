import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa' ;
import React from 'react';
import '../../src/App.css'
import { CartConext } from '../context/CartContex';
export function Carrito(){

   const  {totalItem}=useContext(CartConext)
    return(
        <>
           {/* <div className='conatinerCantidad'> */}
           
            <div className='m-3 '>
                <button type="button" class="btn btn-secondary position-relative">
                                       <FaShoppingCart/>
                        {totalItem()>0 ? <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItem() } </span> :<></>}
                
          
                </button>
            {/* //    <><span className='carritoCantidad'>{totalItem()}</span>
            //     <FaShoppingCart/></> 
            //     : <FaShoppingCart/>
              */}
            </div>  
        </>
    )
}
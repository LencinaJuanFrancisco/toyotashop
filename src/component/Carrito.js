import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa' ;

import '../../src/App.css'
import { CartConext } from '../context/CartContex';
export function Carrito(){

   const  {totalItem}=useContext(CartConext)
    return(
        <>
           <div className='conatinerCantidad'>
            {
                totalItem() >0 ? 
               <><span className='carritoCantidad'>{totalItem()}</span>
                <FaShoppingCart/></> 
                : <FaShoppingCart/>
            }
            </div>  
        </>
    )
}
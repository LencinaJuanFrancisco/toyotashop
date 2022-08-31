import { FaShoppingCart } from 'react-icons/fa' ;   
import '../../src/App.css';
export function Carrito(){
    return(
        <>
           <div className='conatinerCantidad'>
            <span className='carritoCantidad'> 4 </span>
            <FaShoppingCart/>
            </div>  
        </>
    )
}
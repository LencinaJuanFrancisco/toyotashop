import CardGroup from "react-bootstrap/CardGroup";
import Item from '../component/Item';
const ItemList = ({product})=>{
    
    return (
        
         <CardGroup>

         {
            product.length >0 ?
            product.map(pro => <Item key={pro.id} product={pro}/>)
            : <p>cargando ...</p>
      }
         </CardGroup>
    
    )
}
export default ItemList
import CardGroup from "react-bootstrap/CardGroup";
import CardProduct from '../component/CardProduct';
const Products = ()=>{
    const product = [
        {
          bran:'Toyota',
          type:'SEDAN',
          imge:'/img/card/autoCorolla.png',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          bran:'Corolla CROSS',
          type:'SUV',
          imge:'/img/card/autoCorollaCross.png',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          bran:'Hillux',
          type:'Camioneta',
          imge:'/img/card/autoHilluk.png',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          bran:'Prious',
          type:'Electrico',
          imge:'/img/card/autoPRIUS.png',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            bran:'Prious',
            type:'Electrico',
            imge:'/img/card/autoPRIUS.png',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
      ]
    return (
        
         <CardGroup>

         {
            product.map(pro => <CardProduct product={pro}/>)
    
      }
         </CardGroup>
    
    )
}
export default Products
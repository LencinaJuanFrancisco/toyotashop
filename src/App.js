

import {Menu} from './component/Menu'
import Heraderhero from "./component/HeaderHero";
import CardProduct from './component/CardProduct';
function App() {
  const product = [
    {
      bran:'Toyota',
      type:'SEDAN',
      imge:'/img/autoCorolla.png',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      bran:'Corolla CROSS',
      type:'SUV',
      imge:'/img/autoCorollaCross.png',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      bran:'Hillux',
      type:'Camioneta',
      imge:'/img/autoHilluk.png',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      bran:'Prious',
      type:'Electrico',
      imge:'/img/autoPRIUS.png',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
  return (
    <div className="App">
      <Menu/>
      <Heraderhero/>
      {
        product.forEach(pro => {
          <CardProduct product={pro}/>
          
        })
      }
    </div>
  );
}

export default App;

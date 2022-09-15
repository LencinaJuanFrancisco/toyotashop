

import Menu from './component/Menu'
// import Heraderhero from "./component/HeaderHero";
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailConatiner';
import Cart from './component/Cart';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
      <Menu/>
     <Routes>
        <Route path='/' element={<ItemListContainer/>}> </Route>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}> </Route>    
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}> </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>    
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

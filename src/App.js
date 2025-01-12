import './App.css';
import MusicList from './components/MusicList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


let App=()=> {
const [isShowCart,setIsShowCart]=useState(true);

const showCart=()=>{
  
  setIsShowCart(true);}
const hideCart=()=>setIsShowCart(false);

  return (
<>
<Cart show={isShowCart} hideCart={hideCart}/>
<NavBar show={showCart} />      
<MusicList/>
<Footer></Footer>
</>
  );
}

export default App;


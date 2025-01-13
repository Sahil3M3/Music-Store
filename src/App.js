import './App.css';
import MusicList from './components/MusicList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';


let App=()=> {
const [isShowCart,setIsShowCart]=useState(false);

const showCart=()=>{
  
  setIsShowCart(true);}
const hideCart=()=>setIsShowCart(false);

  return (
<CartProvider>
<Cart show={isShowCart} hideCart={hideCart}/>
<NavBar show={showCart} />      
<MusicList/>
<Footer></Footer>
</CartProvider>
  );
}

export default App;


import './App.css';
import MusicList from './components/MusicList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';
import  { createBrowserRouter, RouterProvider } from "react-router"
import About from './components/About';
import HomePage from './components/HomePage';

const router=createBrowserRouter([
  {path:"/about",element:<About/>},
  {path:"/store",element:<MusicList/>},
  {path:"/",element:<HomePage/>}
])

let App=()=> {
const [isShowCart,setIsShowCart]=useState(false);

const showCart=()=>{
  
  setIsShowCart(true);}
const hideCart=()=>setIsShowCart(false);

  return (
<CartProvider>
<Cart show={isShowCart} hideCart={hideCart}/>
<NavBar show={showCart} />      
<RouterProvider router={router} />
<Footer></Footer>
</CartProvider>
  );
}

export default App;


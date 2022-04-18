import Button from 'react-bootstrap/Button';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

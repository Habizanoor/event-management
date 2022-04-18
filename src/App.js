import Button from 'react-bootstrap/Button';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;

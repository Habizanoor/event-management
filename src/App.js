import Button from 'react-bootstrap/Button';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header/Header';

function App() {
  return (
    <div>
      <h1>welcome</h1>
      
      <Routes>
        <Route path="/" element={<Header />} />
        
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Login} from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductList } from './ProductDisplay';

function App() {
  return (
    <>
  <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
  </Routes>

    </>
  );
}
export default App;

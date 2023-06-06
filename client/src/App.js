import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';

// import ProductForm from './components/ProductForm'
// import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/products' default/>
          <Route element={<ProductDetail />} path='/products/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

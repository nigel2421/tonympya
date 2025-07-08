import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/products/new" element={<ProductForm />} />
                    <Route path="/products/edit/:id" element={<ProductForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import Contato from './pages/Contato';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
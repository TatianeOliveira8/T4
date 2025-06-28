import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";



// Clientes
import CadastroCliente from "./pages/clientes/CadastroCliente";
import ListagemClientes from "./pages/clientes/ListagemClientes";
import AtualizarCliente from "./pages/clientes/AtualizarCliente";


import Header from "./components/Header";

const App = () => (
  <>
    <HashRouter>
      <div className="min-vh-100 bg-light">
        <Header />
        <Routes>
       
          {/* Rotas de Clientes */}
          <Route path="/" element={<ListagemClientes />} />
          <Route path="/clientes" element={<ListagemClientes />} />
          <Route path="/clientes/cadastrar" element={<CadastroCliente />} />
          <Route path="/clientes/editar/:id" element={<AtualizarCliente />} />
        </Routes>
      </div>
    </HashRouter>
  </>
);

export default App;

import React from 'react';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Pautas from './pages/Pautas/Pautas';
import Suporte from './pages/Suporte/Suporte';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import CadastrarFuncionario from './pages/Funcionarios/CadastrarFuncionario/CadastrarFuncionario';
import Funcionarios from './pages/Funcionarios/Funcionarios';
import EditarFuncionarios from './pages/Funcionarios/EditarFuncionario/EditarFuncionario'
import Clientes from './pages/Clientes/Clientes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginAdmin />} />
          <Route path='/dashboard-administrativo' index element={<Dashboard />} />
          <Route path='/pautas' index element={<Pautas />} />
          <Route path='/cadastrar-funcionario' index element={<CadastrarFuncionario />} />
          <Route path='/funcionario' index element={<Funcionarios />} />
          <Route path='/editar-funcionario' index element={<EditarFuncionarios />} />
          <Route path='/clientes' index element={<Clientes />} />
          <Route path='/suporte' index element={<Suporte />} />
          <Route path='/404' index element={<PageNotFound />} />
        </Routes>
        {/* <Navigate path='' to='/404' /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

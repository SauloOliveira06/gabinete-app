import React from 'react';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Pautas from './pages/Pautas/Pautas';
import Funcionarios from './pages/Funcionarios/Funcionarios';
import Suporte from './pages/Suporte/Suporte';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginAdmin />} />
          <Route path='/dashboard-administrativo' index element={<Dashboard />} />
          <Route path='/pautas' index element={<Pautas />} />
          <Route path='/funcionario' index element={<Funcionarios />} />
          <Route path='/suporte' index element={<Suporte />} />
          <Route path='/404' index element={<PageNotFound />} />
        </Routes>
        {/* <Navigate path='' to='/404' /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

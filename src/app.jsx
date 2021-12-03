import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login.jsx';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Site />} />
            <Route exact path='/app' element={<Login />} />
            <Route exact path='/app/novaconta' element={<NovaConta />} />
            <Route exact path='/app/resetsenha' element={<ResetSenha />} />
            <Route exact path='/app/home' element={<Home />} />
            <Route exact path='/app/novocliente' element={<NovoCliente />} />
        </Routes>
    </BrowserRouter>;
}

export default App;
import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import './novocliente.css';

function NovoCliente() {
    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <div className="offset-lg-3 col-lg-6">
                <h1>Novo Cliente</h1>

                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1">Nome</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1">E-mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1">Fone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fone" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline-primary btn-acao">Cancelar</button>
                        <button className="btn btn-primary btn-acao">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default NovoCliente;
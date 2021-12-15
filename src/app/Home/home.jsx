import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './home.css';

import firebase from '../Config/firebase';

function Home() {

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    let listaCli = [];

    useEffect(() => {
        firebase.firestore().collection('clientes').get()
            .then(async (resultado) => {
                await resultado.docs.forEach((doc) => {
                    if (doc.data().nome.indexOf(busca) >= 0) {
                        listaCli.push({
                            id: doc.id,
                            nome: doc.data().nome,
                            email: doc.data().email,
                            fone: doc.data().fone
                        });
                    }
                })
                setClientes(listaCli);
            })
    }, [busca]);

    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Cadastro de Clientes</h1>

            <div className="row">
                <div className="col-4">
                    <Link to='/app/novocliente' className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</Link>
                </div>

                <div className="col-8">
                    <div className="input-group mb-3">
                        <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
                        <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
                    </div>
                </div>
            </div>

            <ListaClientes arrayClientes={clientes} />
        </div>
    </div >;
}

export default Home;
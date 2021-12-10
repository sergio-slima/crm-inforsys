import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './novaconta.css';

import firebase from '../Config/firebase';
import 'firebase/auth';

function NovaConta() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function cadastrarUsuario() {
        setMensagem('');
        if (!email || !senha) {
            setMensagem('Preencha seu email e senha!');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(resutlado => {
                setSucesso('S');
                setMensagem('OK');
            }).catch(error => {
                setSucesso('N');
                setMensagem(error.message);
            });
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/Images/logo1.png" alt="" />
            <h1 className="h3 mb-3 font-weight-normal">Nova Conta</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="E-mail" required autofocus />
                <label for="inputEmail">E-mail</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                <label for="inputPassword">Senha</label>
            </div>

            <button onClick={cadastrarUsuario} className="btn btn-lg btn-primary btn-block" type="button">Criar conta</button>

            {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
            {sucesso === 'S' ? <Navigate to='/app/home' /> : null}

            <div className="login-links mt-5">
                <Link to="/app" className="mx-3">Já tenho uma conta.</Link>
            </div>

            <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Inforsys</p>
        </form>
    </div>;
}

export default NovaConta;
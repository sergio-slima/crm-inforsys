import React from 'react';
import { Link } from 'react-router-dom';
import './resetsenha.css';

function ResetSenha() {
    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/Images/logo1.png" alt="" />
            <h1 className="h3 mb-3 font-weight-normal">Recuperar Senha</h1>

            <div className="form-floating">
                <input type="email" id="inputEmail" className="form-control" placeholder="E-mail" required autofocus />
                <label for="inputEmail">E-mail</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Enviar</button>

            <div className="login-links mt-5">
                <Link to="/app/novaconta" className="mx-3">Criar conta.</Link>
            </div>

            <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Inforsys</p>
        </form>
    </div>;
}

export default ResetSenha;
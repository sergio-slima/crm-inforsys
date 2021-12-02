import React from 'react';
import './login.css';

function Login() {
    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="Images/logo1.png" alt="" />
            <h1 className="h3 mb-3 font-weight-normal">Faça login</h1>

            <div className="form-floating">
                <input type="email" id="inputEmail" className="form-control" placeholder="E-mail" required autofocus />
                <label for="inputEmail">E-mail</label>
            </div>

            <div className="form-floating">
                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                <label for="inputPassword">Senha</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>

            <div className="login-links mt-5">
                <a href="#" className="mx-3">Esqueci minha senha</a>
                <a href="#" className="mx-3">Criar uma conta</a>
            </div>

            <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Inforsys</p>
        </form>
    </div>;
}

export default Login;
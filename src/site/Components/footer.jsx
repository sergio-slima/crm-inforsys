import React from 'react';

function Footer() {
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.facebook.com/infosyssistemas/" target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCbvq0ZmXtBHzQ_DksaGZhfg" target="_blank" rel="noreferrer"><i className="fa fa-youtube fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/inforsyssistemas/" target="_blank" rel="noreferrer"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="mailto:suporteinfosys@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
        <a href="mailto:suporteinfosys@gmail.com">suporteinfosys@gmail.com</a>
        <p>Desenvolvido por Inforsys - {ano}</p>
    </section>;
}

export default Footer;
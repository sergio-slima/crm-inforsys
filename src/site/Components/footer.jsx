import React from 'react';

function Footer() {
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href="https://www.facebook.com/infosyssistemas/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCbvq0ZmXtBHzQ_DksaGZhfg" target="_blank"><i class="fa fa-youtube fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="https://www.instagram.com/inforsyssistemas/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="mailto:suporteinfosys@gmail.com" target="_blank"><i class="fa fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
        <a href="mailto:suporteinfosys@gmail.com">suporteinfosys@gmail.com</a>
        <p>Desenvolvido por Inforsys - {ano}</p>
    </section>;
}

export default Footer;
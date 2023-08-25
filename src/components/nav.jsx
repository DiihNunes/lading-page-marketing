import React from "react";

import "./nav.css"

export default (props) => {
    return(
       <header>
        <div className="title">
            <h1>marketing</h1>
            <h1>legal</h1>
        </div>

        <ul>
            <a href="#"><li>Início</li></a>
            <a href="#"><li>Serviços</li></a>
            <a href="#"><li>Sobre</li></a>
            <a href="#"><li>Contato</li></a>
            <a href="#" className="cadastro"><li>Já tem uma conta?</li></a>
        </ul>
       </header>
    )
}
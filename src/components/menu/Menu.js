import React from "react";

function MenuApp() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-between">
                <div className="col-md-4">
                    <a className="navbar-brand" href="/">React Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-md-8">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/empresa">Empresa</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Serviços</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/servicos/servico-um">Serviço 01</a>
                                    <a className="dropdown-item" href="/servicos/servico-dois">Serviço 02</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/servicos/servico-tres">Serviço 03</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MenuApp
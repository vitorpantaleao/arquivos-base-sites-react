import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Servicos() {

    return (
        <>
            <div>
                <Helmet>
                    <title>Serviços | React App Modelo</title>
                    <meta name="description" content="Descrição da Página Serviços" />
                </Helmet>
                <div className="container">
                    <h1>Página de Serviços</h1>
                    <Link to="/servicos/servico-um">Serviço 01</Link> 
                    <br />
                    <Link to="/servicos/servico-dois">Serviço 02</Link>
                </div>

                <Outlet />
            </div>
        </>
    )
}
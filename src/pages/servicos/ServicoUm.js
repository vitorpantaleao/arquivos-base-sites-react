import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ServicoUm() {

    return (
        <>
            <div>
                <Helmet>
                    <title>Serviço Um | React App Modelo</title>
                    <meta name="description" content="Descrição da Página Serviço 01" />
                </Helmet>
                <div className="container">
                    <h1>Seviço 01</h1>
                </div>
                <Outlet />
            </div>
        </>
    )
}
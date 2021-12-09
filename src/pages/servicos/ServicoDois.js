import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ServicoDois() {

    return (
        <>
            <div>
                <Helmet>
                    <title>Serviço Dois | React App Modelo</title>
                    <meta name="description" content="Descrição da Página Serviço Dois" />
                </Helmet>
                <div className="container">
                    <h1>Seviço 02</h1>
                </div>
                <Outlet />
            </div>
        </>
    )
}
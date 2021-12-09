import React from "react";
import { Helmet } from "react-helmet";

export default function Empresa() {
    return (
        <div>
            <Helmet>
                <title>Empresa | React App Modelo</title>
                <meta name="description" content="Descrição da Página Empresa" />
            </Helmet>
            <div className="container">
                <h1>Página Empresa</h1>
            </div>
        </div>
    )
}
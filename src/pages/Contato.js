import React from "react";
import { Helmet } from "react-helmet";

export default function Contato() {
    return (
        <div>
            <Helmet>
                <title>Contato | React App Modelo</title>
                <meta name="description" content="Descrição da Página Contato" />
            </Helmet>
            <div className="container">
                <h1>Página Contato</h1>
            </div>
        </div>
    )
}
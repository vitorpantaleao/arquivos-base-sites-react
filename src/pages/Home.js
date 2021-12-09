import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | React App Modelo</title>
                <meta name="description" content="Descrição da Página Home" />
            </Helmet>
            <div className="container">
                <h1>Página Home</h1>
            </div>
        </div>
    )
}
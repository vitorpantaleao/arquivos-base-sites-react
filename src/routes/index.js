import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Empresa from '../pages/Empresa'
import Servicos from '../pages/servicos/Servicos'
import ServicoUm from '../pages/servicos/ServicoUm'
import ServicoDois from '../pages/servicos/ServicoDois'
import Contato from '../pages/Contato'
import NotFound from '../pages/NotFound'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="servicos/servico-um" element={<ServicoUm />} />
            <Route path="servicos/servico-dois" element={<ServicoDois />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
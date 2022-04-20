import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './views/contacts/Contact'
import Home from './views/home/Home'
import Consultoria from './views/services/consultoria/Consultoria'
import ConsultoriaTcc from './views/services/consult_tcc/ConsultoriaTcc'
import Services from './views/services/Services'

// aqui ficam todas as rotas do app
// path * indica que qualquer rota fora das definidas volta pra home, poderiamos fazer uma pagina 404 NOT FOUND

export default function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/consultoria' element={<Consultoria/>}/>
            <Route path='/consult_tcc' element={<ConsultoriaTcc/>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
    )
};

//vamos tentar passar a tela do 

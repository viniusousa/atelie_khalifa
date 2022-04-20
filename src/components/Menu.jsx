import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
//fazer o khalifa ficar no meio dps add  o nome da marca
//imitando o menu que a gente fez msm
export default function Menu() {
    return(
        <header className='Menu'>

                <Link to={'/services'}>Serviços</Link>
                <Link to={'/contact'}>Contato</Link>

                <div className='logo'>
                    <Link to={'/'} className='home_link'>Khalifa</Link>
                </div>

                <p>(2022) - CONTEUDO PURAMENTE ILUSTRATIVO</p>
        </header>
    )
};

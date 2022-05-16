import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return(
        <header className='Menu'>
            <div className='Menu-item menufle'>
                <div>
                    <Link to={'/services'}>Serviços</Link>
                </div>
                <div>
                    <Link to={'/contact'}>Contato</Link>          
                </div>
            </div >
            <div className='logo Menu-item'>
                <Link to={'/'} className='home_link'>Khalifa</Link>
            </div>
            <div className='Menu-item'>
                <p>(2022) - CONTEUDO PURAMENTE ILUSTRATIVO</p>
            </div>

        </header>
    )
};

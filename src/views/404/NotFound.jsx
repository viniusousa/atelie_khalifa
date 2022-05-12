import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './NotFound.css'

import mia_foto from '../../components/images/mia_khalifa.jpg'
import mia_seria from '../../components/images/mia_seria.png'
import matrix_view from '../../components/images/matrix_view.jpg'


export default function NotFound(params) {

    const navigate = useNavigate()
    const [more, setMore] = useState(false)

    function showMore() {
        setMore(true)
    }

    function hideMore() {
        setMore(false)
        navigate('/')
    }
    
    return(
        <main className='NotFound'>
            <div className='flexNotFound'>
                <section className='cor1'>
                    <div className='txt'>
                        <h1>404 Página não encontrada</h1>
                    </div>
                    <img className='miaImage' src={more === false ?  mia_foto : mia_seria} alt="" />
                </section>
                <section className='cor2'>
                    <div className='txt'>
                        <h2>{more === false ? 'Para onde ir?' : 'Escolha é apenas uma ilusão feita por aqueles que codaram aqui!'}</h2>
                    </div>
                    <div>
                        <div>
                            <img className='miaImage' src={matrix_view} alt="" />
                        </div>
                        <div className='flex-button-not-found'>
                            <div>
                                <button className=' Pill BluePill' onClick={() => hideMore()}>Voltar para a Home</button>
                            </div>
                            <div>
                                <button className={more === false ? 'Pill RedPill' : 'Pill BluePill'} onClick={() =>  more === false ? showMore() : hideMore()}>{more === false ? 'Ver uma coisa legal' : 'Voltar para a Home'}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
};

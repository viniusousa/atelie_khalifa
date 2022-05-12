import React, { useState } from 'react'
import './NotFound.css'

import mia_foto from '../../components/images/mia_khalifa.jpg'
import matrix_view from '../../components/images/matrix_view.jpg'


//minha ideia aqui é fazer um truque como se fosse matrix saca? 

export default function NotFound(params) {
    const [more, setMore] = useState(false)


    function showMore() {
        setMore(true)
    }

    function hideMore() {
        setMore(false)
    }
    
    console.log(more)

    return(
        <div className='NotFound'>
            <div className='flexNotFound'>
                <div className='cor1'>
                    <h1>404 Página não encontrada</h1>
                    <img className='miaImage' src={mia_foto} alt="" />
                </div>
                <div className='cor2'>
                    <div>
                        <h3>{more == false ? 'Para onde ir?' : 'Escolha é apenas uma ilusão feita por aqueles que codaram aqui!'}</h3>
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
                                <button className={more == false ? 'Pill RedPill' : 'Pill BluePill'} onClick={() => showMore()}>{more == false ? 'Ver uma coisa legal' : 'Voltar para a Home'}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

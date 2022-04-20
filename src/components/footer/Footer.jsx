import React from 'react'
import './Footer.css'
import FormFooter from './form/Form'

import { Instagram, Facebook, Twitter } from './svgs/Svg'

//o footer ta pronto só falta agr estilizar e fazer o form funcionar , sim ele vai funcionar 

export default function Footer() {
    return(
        <footer className='Footer'>
            <div className='Item-footer'>
                <div className='titulo'>
                    <h3>Khalifa</h3>
                </div>
                <div>
                    <span>4002-8922</span>
                </div>
                <div>
                    Rua Inexistente 123<br/>
                    Paraíso - Maceió - AL
                    </div>
            <div>
                <span>
                    ESTACIONAMENTO GRATUITO
                </span>
            </div>
            </div>

            <div className='Item-footer'>
                <div>
                    <h3>HORÁRIO DE FUNCIONAMENTO</h3>
                    <span>
                        Seg à sex: 08h às 22h<br/>
                        Sab: 10h às 16h<br/>
                        Dom: Fechado.
                    </span>
                </div>
                <div>
                    <h3>NOSSAS REDES</h3>
                </div>
                <div>
                    {Instagram} {Facebook} {Twitter}
                </div>
            </div>

            <div className='Item-footer'>
                <div>
                    <h3>RECEBA NOVIDADES</h3>
                </div>
                <div>
                    <FormFooter/>
                </div>
            </div>
        </footer>
    )
};
//lembrar de tirar a atualização de tela após submeter o form
//editar o form
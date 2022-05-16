import React from 'react'
import './Footer.css'
import FormFooter from './form/Form'

import { Instagram, Facebook, Twitter } from './svgs/Svg'

export default function Footer() {
    return(
        <footer className='Footer'>
            <div className='Item-footer'>
                <div className='titulo'>
                    <h3>Khalifa</h3>
                </div>
                <div>
                    <span><a href="tel: +558240028922">4002-8922</a></span>
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
                    <abbr title="Por se tratar de projeto academico não há redes sociais, porém ao clicar em um link pode ver o código usado aqui. "><a href="https://github.com/viniusousa" target="_blank">{Instagram} {Facebook} {Twitter}</a></abbr>
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

import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './FlipCardTcc.css'
import consultTcc from '../../../../components/images/consult_tcc.jpg'
import backFlipCard from '../../../../components/images/backflip.png'


//tcc

//ajustar responsividade

//Estudantes de moda tem a chance de criar o design das peças e solicitar nossa ajuda ou execução de sua criação para algum trabalho específico que seja de sua necessidade


export default function FlipCardTcc(props) {
    const [isFlipped, SetIsFlipped] = useState(false)
    function showBack() {
        SetIsFlipped(true)
    }

    function showFront() {
        SetIsFlipped(false)
    }

    return(
    <div className='Flipper'>
        <ReactCardFlip isFlipped={isFlipped}>
            <div className='frontCardtcc' onMouseEnter={showBack}>
            <div><img className='card-image' src={consultTcc} alt="" /></div>
            </div>
            <div className='backCardtcc' onMouseLeave={showFront}>
                <img className='card-image' src={backFlipCard} alt="" />
            </div>
        </ReactCardFlip>
    </div>
    )
};

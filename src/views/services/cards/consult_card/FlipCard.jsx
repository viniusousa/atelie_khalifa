import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import './FlipCard.css'
import consultoriaImage from '../../../../components/images/consultoria.jpg'
import backFlipCard from '../../../../components/images/backflip.png'


//consultoria


// Consultoria

//coloar o alt das imagens

//A consultoria incentivará o autoconhecimento, trazendo à tona quem você realmente é, qual seu estilo, suas preferências, cores e acessórios, valorizando sempre o conforto, o bem-estar e a autoestima

export default function FlipCard(props) {
    const navigate = useNavigate()
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
            <div className='frontCard' onMouseEnter={showBack}>
                <div><img className='card-image' src={consultoriaImage} alt="" /></div>
            </div>
            <div className='backCard' onMouseLeave={showFront}>
                    <img className='card-image' src={backFlipCard} alt="" />
                    <div className='txtBackCard'>
                            <p>A consultoria incentivará o autoconhecimento, trazendo à tona quem você realmente é, qual seu estilo, suas preferências, cores e acessórios, valorizando sempre o conforto, o bem-estar e a autoestima
                                <div>
                                    <button onClick={() => navigate('/consultoria')}>SAIBA MAIS</button>
                                </div>
                            </p>
                    </div>
            </div>
        </ReactCardFlip>
    </div>
    )
};

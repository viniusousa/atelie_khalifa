import React from 'react'
import './Consultoria.css'
import consultoria_folder from '../../../components/images/consultoria_folder.jpg'
import MainForm from '../../../components/mainform/MainForm'

import dread_hot_consult_cut from '../../../components/images/dread_hot_consult-cut.jpg'
import Footer from '../../../components/footer/Footer'

export default function Consultoria() {
    return (
        <div>

            <main className='Consultoria'>
                <section>
                    <img className='consultoriaFolder' src={consultoria_folder} alt="" />
                    <div className='titulo'>
                        <h1>CONSULTORIA PESSOAL</h1>
                    </div>
                    <div className='description'>
                        <p>A consultoria incentivará o autoconhecimento, trazendo à tona quem você realmente é, qual seu estilo, suas preferências, cores e acessórios, valorizando sempre o conforto, o bem-estar e a autoestima. Assim, estará preparada para fazer as melhores e mais conscientes escolhas em suas compras e no dia a dia.</p>
                    </div>
                </section>




                <section className='ConsultoriaFlex'>
                <div className='ConsultoriaItem firsCardConsult'>
                    <div>
                        <img className='dreadImage' src={dread_hot_consult_cut} alt="" />
                    </div>

                </div>
                <div className='ConsultoriaItem dreadTxtContainer'>
                        <p className='dreadTxt'>Aliada a larga experiencia e ao design exclusivo da estilista Ester Khalifa você ira ter uma experiencia unica e inovadora.</p>

                </div>
                <div className='ConsultoriaItem'>
                    <MainForm nome='ENVIE SEUS DADOS, ENTRAREMOS EM CONTATO' origem='consultoria_pessoal'/>
                </div>
                </section>
                
            </main>
            <Footer/>
        </div>
    )
};

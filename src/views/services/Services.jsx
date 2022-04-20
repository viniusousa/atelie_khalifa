import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import './Services.css'

import services_folder from '../../components/images/services_folder.jpg'
import consultoria from '../../components/images/consultoria.jpg'
import consult_tcc from '../../components/images/consult_tcc.jpg'


//aqui vamos fazer um efeito de flip-card então pra facilitar vamos colocar os card em outra parte

export default function Services() {
    const navigate = useNavigate()
    return(
        <div>
            <main className='Services'>
                <section>
                    <img src={services_folder} className='services_folder' alt="" />
                    <div className='titulo'>
                        <h2>SERVIÇOS</h2>
                    </div>
                </section>
                
                <section>
                    <div className='txt'>
                        <p>A Khalifa além de ter suas coleções próprias também contribui para o mundo da moda, prestando consultoria personalizada e também fornecendo orientações  no TCC de estudantes de moda.</p>
                    </div>
                </section>

                <section className='cardsLinks'>
                    <div className='carLinksItem'>
                        <img src={consultoria} alt="" className='card-image'/>
                    </div>
                    <div className='carLinksItem'>
                        <img src={consult_tcc} alt="" className='card-image'/>
                    </div>
                </section>

                <section className='cardsLinks'>
                    <div className='carLinksItem carLinksItem2'>
                        <span>A consultoria incentivará o autoconhecimento, trazendo à tona quem você realmente é, qual seu estilo, suas preferências, cores e acessórios, valorizando sempre o conforto, o bem-estar e a autoestima</span>
                        <div>
                            <button onClick={() => navigate('/consultoria')}>SAIBA MAIS</button>
                        </div>
                    </div>
                    <div className='carLinksItem carLinksItem2'>
                       <span>Estudantes de moda tem a chance de criar o design das peças e solicitar nossa ajuda ou execução de sua criação para algum trabalho específico que seja de sua necessidade</span>
                       <div>
                           <button onClick={() => navigate('/consult_tcc')}>SAIBA MAIS</button>
                       </div>
                    </div>
                </section>
            </main>
                <Footer/>
        </div>
    )
};

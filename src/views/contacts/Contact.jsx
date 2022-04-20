import React from 'react'
import Footer from '../../components/footer/Footer'
import './Contact.css'
import contact_folder from '../../components/images/contact_folder.jpg'
import MainForm from '../../components/mainform/MainForm'
//aqui é onde eu quero renderizr uma loclização com a API d google maps
//ver no App do projeto se usamos o REDUX para genrenciar o estado global da aplicação

import mapa_temp from '../../components/images/mapa_temp.jpg'

export default function Contact() {
    return(
        <div>
            <main className='Contact'>
                <section>
                    <img src={contact_folder} className='contact_folder' alt="" />
                    <div className='titulo'>
                        <h2>CONTATO</h2>
                    </div>
                </section>
                <section className='cards_contact'>
                    <div className='contactItem contactItemGrow'>
                        <h4>Venha conhecer nosso espaço!</h4>
                        <span>
                            Rua Inexistente 123-A<br/>
                            Paraíso - Maceió - AL
                        </span>
                        <div>
                            <img className='mapa_temp' src={mapa_temp} alt="" />
                        </div>
                    </div>
                    <div className='contactItem'>
                        <MainForm tableType='contact' nome='ENTRE EM CONTATO CONOSCO' origem='contatos'/>
                    </div>
                </section>

            </main>
                <Footer/>
        </div>
    )
};

import React from 'react'
import './ConsultoriaTcc.css'
import consult_tcc_folder from '../../../components/images/consult_tcc_folder.jpg'
import MainForm from '../../../components/mainform/MainForm'

import agulha_image from '../../../components/images/agulha.png'
import maquina_image from '../../../components/images/maquina_de_costura.png'
import dress_image from '../../../components/images/dress.png'
import Footer from '../../../components/footer/Footer'

export default function ConsultoriaTcc() {
    return (
        <div>
            <main className='ConsultoriaTcc'>
                <section>
                    <img className='consult_tcc_folder' src={consult_tcc_folder} alt="" />
                    <div className='titulo'>
                        <h1>Consultoria TCC</h1>
                    </div>
                    <div className='txtTcc'>
                        <p>
                            Estudantes de moda tem a chance de criar o design das peças e solicitar nossa ajuda ou execução de sua criação para algum trabalho específico que seja de sua necessidade.
                        </p>
                    </div>
                </section>


                <section className='FlexTcc'>
                    <div className='FlexTccItem'>
                        <div className='containerIcons'>
                            <img className='iconConsultTcc containerIconsChild' src={dress_image} alt="" />
                            <p className='containerIconsChild'>MONTE SEU LOOK <br />
                                    Estamos aqui para ajudá-lo com suas propostas de look Para entrega do TCC. Conte conosco e com nossa confidencialidade.</p>
                        </div>
                        <div className='containerIcons'>
                            <img className='iconConsultTcc containerIconsChild' src={maquina_image} alt="" />
                            <p className='containerIconsChild'>EXPERIÊNCIA <br />
                                São 6 anos montando looks dos mais diversos.</p>
                        </div>


                        <div className='containerIcons'>
                            <img className='iconConsultTcc containerIconsChild' src={agulha_image} alt="" />
                            <p className='containerIconsChild'>VENHA NOS VISITAR <br />
                                Prepare seus croquis e venha nos visitar para uma consulta sem compromisso.</p>
                        </div>
                    </div>

                    <div className='FlexTccItem'>
                        <MainForm tableType='tcc' nome='SOLICITE UM ORÇAMENTO'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

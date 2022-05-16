import React from 'react'
import Carrossel from '../../components/carrosel/Carrossel'
import Footer from '../../components/footer/Footer'
import GradeImages from '../../components/grade-images/GradeImages'
import './Home.css'


import dread_hot from '../../components/images/dread_hot.jpg'

/*
 <section>
        <span>Aqui vem a logo</span>
</section>
*/


export default function Home() {
    //renderizar a logo sobre as imagens, então a grade via ter um Z index 5 por ai
    return(
        <div className='topHome'>
            <main className='Home'>
                <section>
                    <GradeImages/>
                </section>



                <section className='visaoTxt'>
                    <h2>KHALIFA REPRESENTA TRAJES SOFISTICADOS E CASUAIS, CONSCIENTES DA MODA E COM DESIGN EXCLUSIVO E ESPECIAL </h2>
                </section>
                <section>
                    <Carrossel/>
                </section>  
                <section>
                    <h2>EXPLORE AS ÚLTIMAS TENDÊNCIAS COM O NOSSOS LOOKBOOKS </h2>
                </section>
                <section>
                    <span>Aqui vem os look books</span>
                </section>


                <section className='HomeHistoria'>


                    <div className='itemHomeHist'>
                        <h2>NOSSA HISTÓRIA</h2>
                    </div>


                    <div className='EsterKhalifa  itemHomeHist'>
                        <div>
                            <img src={dread_hot} alt="" />
                            <p>Ester Khalifa</p>
                        </div>
                        <div>
                            <p className='txtHistoria'>
                            A Khalifa nasceu a partir do sonho de uma estudante de moda do municipio Alta Floresta no interior do Mato Grosso, onde fazia pequenos consertos de roupas e produzia suas próprias roupas para ir em festa e eventos da sua cidade natal, visando oportunidades após concluir o curso técnico de moda Ester se mudou para a cidade de Maceió a capital alagoana onde fundou sua marca e passou a criação de coleções próprias, porém ainda mantém serviços de criação de peças e consertos baseada na demanda de clientes como forma de manter viva suas origens.  
                            </p>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
    
}


//  A Khalifa nasceu a partir do sonho de uma estudante de moda do municipio Alta Floresta no interior do Mato Grosso, onde fazia pequenos consertos de roupas e produzia suas próprias roupas para ir em festa e eventos da sua cidade natal, visando oportunidades após concluir o curso técnico de moda Ester se mudou para a cidade de Maceió a capital alagoana onde fundou sua marca e passou a criação de coleções próprias, porém ainda mantém serviços de criação de peças e consertos baseada na demanda de clientes como forma de manter viva suas origens
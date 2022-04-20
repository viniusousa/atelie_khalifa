import React from 'react'
import Footer from '../../components/footer/Footer'
import './Home.css'

export default function Home() {
    return(
        <div>
            <main className='Home'>
                <section>
                    <span>Aqui vem a logo</span>
                </section>
                <section>
                    <span>Aqui vem o grupo de fotos</span>
                </section>
                <section>
                    <h1>KHALIFA REPRESENTA TRAJES SOFISTICADOS E CASUAIS, CONSCIENTES DA MODA E COM DESIGN EXCLUSIVO E ESPECIAL </h1>
                </section>
                <section>
                    <span>Aqui vem o carrossel</span>
                </section>  
                <section>
                    <h2>EXPLORE AS ÚLTIMAS TENDÊNCIAS COM O NOSSOS LOOKBOOKS </h2>
                </section>
                <section>
                    <span>Aqui vem os look books</span>
                </section>
                <section>
                    <div>
                        <h2>NOSSA HISTÓRIA</h2>
                    </div>
                    <div>
                        <span>A foto da ster khalifa do lado</span>
                    </div>
                    <div>
                        <p>
                        A Khalifa nasceu a partir do sonho de uma estudante de moda do municipio Alta Floresta no interior do Mato Grosso, onde fazia pequenos consertos de roupas e produzia suas próprias roupas para ir em festa e eventos da sua cidade natal, visando oportunidades após concluir o curso técnico de moda Ester se mudou para a cidade de Maceió a capital alagoana onde fundou sua marca e passou a criação de coleções próprias, porém ainda mantém serviços de criação de peças e consertos baseada na demanda de clientes como forma de manter viva suas origens.  
                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
    
}

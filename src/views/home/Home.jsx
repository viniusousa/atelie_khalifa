import React from 'react'
import Carrossel from '../../components/carrosel/Carrossel'
import Footer from '../../components/footer/Footer'
import GradeImages from '../../components/grade-images/GradeImages'
import './Home.css'

import {Carousel} from '3d-react-carousal';


import dread_hot from '../../components/images/dread_hot.jpg'

import car_image1 from '../../components/images/car_image1.jpeg'
import car_image2 from '../../components/images/car_image2.jpeg'
import car_image3 from '../../components/images/car_image3.jpeg'


import look_image1 from '../../components/images/look_image1.jpeg'
import look_image2 from '../../components/images/look_image2.jpeg'
import look_image3 from '../../components/images/look_image3.jpeg'
import look_image4 from '../../components/images/look_image4.jpeg'
import look_image5 from '../../components/images/look_image5.jpeg'
import look_image6 from '../../components/images/look_image6.jpeg'



export default function Home() {
    const [image, setImage] = React.useState(look_image1)

    function renderLook1() {
        setImage(look_image1)
    }
    function renderLook2() {
        setImage(look_image2)
    }
    function renderLook3() {
        setImage(look_image3)
    }
    function renderLook4() {
        setImage(look_image4)
    }
    function renderLook5() {
        setImage(look_image5)
    }
    function renderLook6() {
        setImage(look_image6)
    }

    let slides = [
        <img src={car_image1} alt="" />,
        <img src={car_image2} alt="" />,
        <img src={car_image3} alt="" />
    ]

    //renderizar a logo sobre as imagens, então a grade via ter um Z index 5 por ai


    // a partir de 690px detela, a grade de imagens fica fixa na tela


    return(
        <div className='topHome'>
            <main className='Home'>
                <section>
                    <GradeImages/>
                </section>



                <section className='visaoTxt'>
                    <h2>KHALIFA REPRESENTA TRAJES SOFISTICADOS E CASUAIS, CONSCIENTES DA MODA E COM DESIGN EXCLUSIVO E ESPECIAL </h2>
                </section>



                <section className='CarrosselHome'>
                    <div>
                        <Carousel slides={slides} autoplay={true}/>
                    </div>
                </section >  




                <section className='TendenciasHome'>
                    <h2>EXPLORE AS ÚLTIMAS TENDÊNCIAS COM O NOSSOS LOOKBOOKS </h2>
                </section>




                <section className=' LookBookHome LoFlexLookBook'>

                    <div className='ItemLookBook'>
                        <div onMouseEnter={renderLook1}>
                            <p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2022</p>
                        </div>
                        <div onMouseEnter={renderLook2}>
                            <p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERÃ O 2022</p>
                        </div>
                        <div onMouseEnter={renderLook3}>
                            <p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2021</p>
                        </div>
                        <div onMouseEnter={renderLook4}>
                            <p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERAO 2021</p>
                        </div>
                        <div onMouseEnter={renderLook5}>
                            <p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2020</p>
                        </div>
                        <div onMouseEnter={renderLook6}>
                            <p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERAO 2020</p>
                        </div>
                    </div>
                    <div className='ItemLookBook'>
                        <img className='renderLookImage' src={image} alt="" />
                    </div>

                </section>


                <section className='HomeHistoria'>


                    <div className=' historiaChamada itemHomeHist'>
                        <h2>NOSSA <br /> HISTÓRIA</h2>
                    </div>


                    <div className='EsterKhalifa  itemHomeHist'>
                        <div>
                            <img className='DreadHotImage' src={dread_hot} alt="" />
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


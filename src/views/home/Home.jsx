import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Footer from '../../components/footer/Footer'
import GradeImages from '../../components/grade-images/GradeImages'
import './Home.css'


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
    const [largura, setLargura] = React.useState(window.innerWidth)

    
        window.addEventListener('resize', () => {
            setLargura(window.innerWidth)
        }, [])
        
    

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
                    <Carousel>
                        <div>
                            <img className='car_image' src={car_image1} alt="" />
                        </div>
                        <div>
                            <img className='car_image' src={car_image2} alt="" />
                        </div>
                        <div>
                            <img className='car_image' src={car_image3} alt="" />
                        </div>
                    </Carousel>
                </section >  




                <section className='TendenciasHome'>
                    <h2>EXPLORE AS ÚLTIMAS TENDÊNCIAS COM O NOSSOS LOOKBOOKS </h2>
                </section>

                <section className=' LookBookHome'>

                    { largura >= 690 ? (
                        <>
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

                        </>
                    ): (
                        <>
                            <div className=' ItemLookBook ItemLookBook2'>
                                <Carousel>
                                   <div>
                                       <img className='renderLookImage' src={look_image1} alt="" />
                                   </div>
                                   <div>
                                        <img className='renderLookImage' src={look_image2} alt="" />
                                   </div>
                                      <div>
                                        <img className='renderLookImage' src={look_image3} alt="" />
                                      </div>
                                        <div>
                                            <img className='renderLookImage' src={look_image4} alt="" />
                                        </div>
                                        <div>
                                            <img className='renderLookImage' src={look_image5} alt="" />
                                        </div>
                                        <div>
                                            <img className='renderLookImage' src={look_image6} alt="" />
                                        </div>
                                </Carousel>
                                
                            </div>
                        </>)}

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


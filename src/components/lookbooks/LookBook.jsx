import React from 'react'
import './LookBook.css'


import look_image1 from '../../components/images/look_image1.jpeg'
import look_image2 from '../../components/images/look_image2.jpeg'
import look_image3 from '../../components/images/look_image3.jpeg'
import look_image4 from '../../components/images/look_image4.jpeg'
import look_image5 from '../../components/images/look_image5.jpeg'
import look_image6 from '../../components/images/look_image6.jpeg'

export default function LookBook(params) {
    return(
        <div className='LookBook'>
            <section className='FlexLookBook'>
                <div className='ItemLookBook'>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2022</p></div>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERÃ O 2022</p></div>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2021</p></div>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERAO 2021</p></div>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO OUTONO/INVERNO 2020</p></div>
                    <div><p className='UnderlineFItemBook'>COLEÇÃO PRIMAVERA/VERAO 2020</p></div>
                </div>
                <div className='ItemLookBook'>
                    <img className='renderLookImage' src={look_image1} alt="" />
                </div>
            </section>
        </div>
    )
};

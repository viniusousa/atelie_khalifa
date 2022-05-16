import React from 'react'
import './GradeImages.css'
import image_grade1 from '../../components/images/image_grade1.jpeg'
import image_grade2 from '../../components/images/image_grade2.jpeg'
import image_grade4 from '../../components/images/image_grade4.jpeg'
import image_grade5 from '../../components/images/image_grade5.jpeg'
import image_grade6 from '../../components/images/image_grade6.jpeg'
import image_grade7 from '../../components/images/image_grade7.jpeg'
import image_grade8 from '../../components/images/image_grade8.jpeg'
import image_grade9 from '../../components/images/image_grade9.jpg'
import image_grade10 from '../../components/images/image_grade10.jpg'

export default function GradeImages(params) {

    return (
        <div className='Grade'>
            <div className='GradeImages'>

            </div>
                <img className='imageGrade imageGrade1' src={image_grade1} alt="" />
                <img className='imageGrade imageGrade2' src={image_grade2} alt="" />
                <img className='imageGrade imageGrade4' src={image_grade4} alt="" />
                <img className='imageGrade imageGrade5' src={image_grade5} alt="" />
                <img className='imageGrade imageGrade6' src={image_grade6} alt="" />
                <img className='imageGrade imageGrade7' src={image_grade7} alt="" />
                <img className='imageGrade imageGrade8' src={image_grade8} alt="" />
                <img className='imageGrade imageGrade9' src={image_grade9} alt="" />
                <img className='imageGrade imageGrade10' src={image_grade10} alt="" />
        </div>
    )
};

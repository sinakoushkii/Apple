import React from 'react'
import plusBtn from '../../assets/icons/plus.png'
import img1 from '../../assets/images/card1mainImage.jpg'

const Card = ({title,subTitle,img,mainImg,description}) => {
  return (
    <div>
        <div className='card'>
            <img className='card__main-img' src={mainImg}/>
            <div className='card__title-wrapper'>
                <h3 className='text-base font-semibold'>{subTitle}</h3>
                <h2 className='text-3xl font-semibold mt-2'>{title}</h2>
            </div>
            <img className='card__plus-btn' width={30} height={30} src={plusBtn}/>
        </div>
    </div>
  )
}

export default Card
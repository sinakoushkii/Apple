import CardWrapper from '@components/cards/CardWrapper'
import Info from '@components/Info'
import TopSlider from '@components/TopSlider'
import WelcomeVideo from '@components/WelcomeVideo'
import React from 'react'

const Iphone = () => {
  return (
    <div className='w-full'>
      <TopSlider />
      <Info />
      <WelcomeVideo />
      <CardWrapper />
    </div>
  )
}

export default Iphone
import React from 'react'
import { bighero, smallhero } from '../assets'

const Hero = () => {
  return (
    <section className='w-full px-5 my-12 md:py-12 lg:px-20'>
      <figure className='w-full flex justify-center items-center cursor-pointer'>
        <img className='object-contain w-full h-full hidden sm:flex rounded-3xl' src={smallhero} alt="hero image" />
        <img className='object-contain w-full h-full flex sm:hidden rounded-3xl' src={bighero} alt="hero image" />
      </figure>
    </section>
  )
}

export default Hero
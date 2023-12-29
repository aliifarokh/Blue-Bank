import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Lovely from './components/Lovely'
import Card from './components/Card'
import { cardb, cardg, cardr } from './assets'
import BlueSection from './components/BlueSection'
import Idenity from './components/Idenity'
import Pay from './components/Pay'
import Questions from './components/Questions'
import Slider from './components/Slider'

const App = () => {

  const [card, setCard] = useState(cardr)
  const myParent = useRef()
  const myParent2 = useRef()

  const [fixed, setFixed] = useState(false)

  

  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    let st = e.target.scrollTop
    if (st > 100) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }


  useEffect(() => {

    let temp = myParent.current.children
    temp = Object.entries(temp)

    temp.forEach((val, i) => {
      val[1].addEventListener('click', () => {
        switch (i) {
          case 0: setCard(cardr); break;
          case 1: setCard(cardg); break;
          case 2: setCard(cardb); break;
        }
      })
    })

  }, [card])

  return (
    <main onScroll={(event) => handleScroll(event)} className='w-full flex relative z-[9999] justify-center bg-white overflow-x-hidden h-screen overflow-y-scroll font-Dana'>
      <div className='w-full 2xl:container mx-auto'>


        <div className='w-full relative z-[1000]'>

          <Navbar fixed={fixed} />
          <Hero />
          <Lovely />
          <Card card={card} myref={myParent} myref2={myParent2} />
          <BlueSection />
          <Idenity />
          <Pay />
          <Questions />
          <Slider />
          <Footer />

        </div>


      </div>
    </main>
  )
}

export default App

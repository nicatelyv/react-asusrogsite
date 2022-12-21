import React from 'react'
import Footer from '../../components/Footer'
import MainSlider from '../../components/HomeComponents/MainSlider'
import MainText from '../../components/HomeComponents/MainText'
import SlickSlider from '../../components/HomeComponents/SlickSlider'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <MainText/>
    <MainSlider/>
    <SlickSlider/>
    <Footer/>
    </>
  )
}

export default Home
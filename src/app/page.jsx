import React from 'react'
import HomeBanner from './components/HomeBanner'
import Feature from './components/Feature'
import FetureImgBox from './components/FetureImgBox'
import FeatureIconBox from './components/FeatureIconBox'


const homepage = () => {
  return (
    <>
    <HomeBanner />
    <FeatureIconBox />
    <FetureImgBox />
    <Feature />
    </>
  )
}

export default homepage

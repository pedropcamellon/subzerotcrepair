import React from 'react'
// import tw from 'twin.macro'
// import { Button, Logo } from './../components'

import Header from "./../components/headers/light.js"
import Hero from "./../components/hero/BackgroundAsImage.js";
import Services from "./../components/features/DashedBorderSixFeatures.js";
import Features from "./../components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import WhoWeAre from "./../components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";


const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <Features />
    <WhoWeAre />
  </>
)

export default HomePage

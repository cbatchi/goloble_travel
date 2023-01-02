import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import { heroImage } from '../../assets'

import HeaderStyled from './header.styled'

const Header = () => {
  return (
    <HeaderStyled imageSource={heroImage}>
      <Navbar />
      <Hero />
    </HeaderStyled>
    
  )
}

export default Header
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const HeaderTw = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`

export const NavLinks = tw.div`inline-block`

/* 
 * hocus: stands for "on hover or focus"
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0! text-primary-900`};
`

const Header: React.FC<{
  logoLink: any
  className?: string
}> = ({ logoLink, className }) => {
  const defaultLogoLink = (
    <LogoLink href="/">
      <Image
        src="/images/logo.png" // Route of the image file
        height={50} // Desired size with correct aspect ratio
        width={50} // Desired size with correct aspect ratio
        alt="Logo"
      />
      SubZero TC Repair
    </LogoLink>
  )

  logoLink = logoLink || defaultLogoLink

  return (
    <HeaderTw className={className || 'header-light'}>
      <DesktopNavLinks>{logoLink}</DesktopNavLinks>
    </HeaderTw>
  )
}

export default Header
